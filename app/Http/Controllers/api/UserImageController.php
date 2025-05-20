<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Helper\Data;
use App\Http\Requests\api\UserImageRequest;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;


class UserImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userId = Auth::id();
        $images = Image::where(Data::USER_ID_FOREIGN_KEY, $userId)->get();

        if ($images) {
            return response()->json([
                                        'success' => true,
                                        'images' => $images ? $images : ''
                                    ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserImageRequest $request)
    {
        try {
            $request->validated();

            $user_id = Auth::id();
            $folderPath = "uploads/{$user_id}";
            $imageCount = count(Image::where(Data::USER_ID_FOREIGN_KEY, $user_id)->get());

            if ($imageCount + count($request->file('images')) > Data::MAX_IMAGE_UPLOAD) {
                return response()->json(['success' => false, 'message' => 'You can only upload up to 5 images.']);
            }

            // Ensure user folder exists
            if (!File::exists($folderPath)) {
                File::makeDirectory($folderPath, 0777, true);
            }

            // Process each image
            foreach ($request->file('images') as $imageFile) {
                $manager = new ImageManager(new Driver());
                $image = $manager->read($imageFile);

                $image->resize(800, 800, function ($constraint) {
                    $constraint->aspectRatio();
                    $constraint->upsize();
                });

                // Create file name
                $imageName = time() . '-' . $imageFile->getClientOriginalName();
                $image->save($folderPath . '/' . $imageName);

                // Store image info in DB
                Image::create([
                                  Data::USER_ID_FOREIGN_KEY => $user_id,
                                  'image_path' => $folderPath . "/" . $imageName,
                              ]);
            }

            return response()->json(['success' => 'true', 'message' => 'Images uploaded successfully!']);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Image $request, string $id)
    {
        try {
            $image = Image::findOrFail($id);
            if ($image->user_id != Auth::id()) {
                return response()->json(['success' => 'false', 'message' => 'Unauthorized action']);
            }

            $imagePath = $image->image_path;
            if (File::exists($imagePath)) {
                File::delete($imagePath); // Delete the image file from the server
            }

            $image->delete(); // Remove record from DB

            return response()->json(['success' => 'true', 'message' => 'Image deleted successfully!']);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }

    public function replace(Request $request, $id)
    {
        try {

            if(!$id) {
                return response()->json(['success' => 'false', 'message' => 'Id is required!']);
            }

            $request->validate([
                                   'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:1024',
                               ]);

            $image = Image::findOrFail($id);
            if ($image->user_id != Auth::id()) {
                return response()->json(['success' => 'false', 'message' => 'Unauthorized action.']);
            }

            $imagePath = $image->image_path;
            if (File::exists($imagePath)) {
                File::delete($imagePath); // Delete old image
            }

            $newImage = $request->file('image');
            //$imageFile = ImageFacade::make($newImage)->orientate();

            $manager = new ImageManager(new Driver());
            $imageFile = $manager->read($newImage);

            $imageFile->resize(800, 800, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });

            $folderPath = "uploads/" . Auth::id();
            $imageName = time() . '-' . $newImage->getClientOriginalName();
            $imageFile->save($folderPath . '/' . $imageName);

            $image->update([
                               'image_path' => "uploads/" . Auth::id() . "/" . $imageName,
                           ]);

            return response()->json(['success' => 'true', 'message' => 'Image replaced successfully!']);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }



    }
}
