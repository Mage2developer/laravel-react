<?php

namespace App\Http\Controllers\Admin\web;

use App\Http\Controllers\Admin\Exception;
use App\Http\Controllers\Controller;
use App\Http\Helper\Data;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;


class UserController extends Controller
{
    public function __construct(
        protected User $user
    ) {
    }

    public function index(Request $request)
    {
        // Get sorting parameters from the request
        $sort = $request->input('sort', 'id');
        $direction = $request->input('direction', 'asc');

        // Get search parameter
        $search = $request->input('search', '');

        // Build the query
        $query = User::query();
        $query->where('role', Data::USER_SLUG);

        // Apply search if provided
        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%");
            });
        }

        // Apply sorting
        $query->orderBy($sort, $direction);

        // Get paginated results (10 per page)
        $users = $query->paginate(Data::ADMIN_USERS_LIST_LIMIT)->withQueryString();

        // Return Inertia view with data
        return Inertia::render('Admin/Users/Index', [
            'users' => $users,
            'filters' => [
                'search' => $search,
                'sort' => $sort,
                'direction' => $direction,
            ]
        ]);
    }

    /**
     * Mass delete profiles
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function massDestroy(Request $request): JsonResponse
    {
        $idArray = $request->input('ids');

        try {
            User::destroy($idArray);

            return response()->json([
                'message' => 'Profiles deleted successfully.',
                'success' => true
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage(),
                'success' => false
            ]);
        }
    }

    /**
     * Mass active/inactive profile
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function massActive(Request $request): JsonResponse
    {
        $idArray = $request->input('ids');
        $status = $request->input('status');

        try {
            foreach ($idArray as $userId) {

                // Find the user by their ID
                $user = User::findorfail($userId);
                if ($user) {

                    // Update the user's name
                    $user->is_deleted = (int)$status;
                    $user->save();
                }
            }
            $message = 'Profiles activated successfully.';
            if ($status) {
                $message = 'Profiles inactivated successfully.';
            }

            return response()->json([
                'message' => $message,
                'success' => true
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage(),
                'success' => false
            ]);
        }
    }

    public function edit(Request $request)
    {
        $profileId = $request->route('profileId');

        $userProfile = $this->user->getUserProfileById($profileId);

        return Inertia::render('Admin/Users/Edit', [
            'profile' => $userProfile->toArray()
        ]);
    }
}
