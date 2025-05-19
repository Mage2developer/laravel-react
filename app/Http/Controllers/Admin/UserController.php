<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Helper\Data;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;


class UserController extends Controller
{
    public function index(Request $request)
    {
        // Get sorting parameters from the request
        $sort = $request->input('sort', 'id');
        $direction = $request->input('direction', 'asc');

        // Get search parameter
        $search = $request->input('search', '');

        // Build the query
        $query = User::query();

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
        //$idArray = $request->input('ids');
        $idArray = [
            1,
            5,
            6,
            7,
            8,
            9,
            10
        ];

        try {
            User::destroy($idArray);

            return response()->json(
                [
                    'message' => 'Profiles deleted successfully.',
                    'success' => true
                ]
            );
        } catch (Exception $exception) {
            return response()->json(
                [
                    'message' => $exception->getMessage(),
                    'success' => false
                ]
            );
        }
    }

    /**
     * Mass De-activate profile
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function massDeactivate(Request $request): JsonResponse
    {
        //$idArray = $request->input('ids');
        $idArray = [
            1,
            5,
            6,
            7,
            8,
            9,
            10
        ];

        try {
            foreach ($idArray as $userId) {
                // Find the user by their ID
                $user = User::findorfail($userId);
                if ($user) {
                    // Update the user's name
                    $user->status = Data::DISABLE;
                    $user->is_deleted = Data::ENABLE;
                    $user->save();
                }
            }

            return response()->json(
                [
                    'message' => 'Profiles deactivated successfully.',
                    'success' => true
                ]
            );
        } catch (Exception $exception) {
            return response()->json(
                [
                    'message' => $exception->getMessage(),
                    'success' => false
                ]
            );
        }
    }

    /**
     * Mass activate profile
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function massActivate(Request $request): JsonResponse
    {
        $idArray = [
            1,
            5,
            6,
            7,
            8,
            9,
            10
        ];

        try {
            foreach ($idArray as $userId) {
                // Find the user by their ID
                $user = User::findorfail($userId);
                if ($user) {
                    // Update the user's name
                    $user->status = Data::ENABLE;
                    $user->is_deleted = Data::DISABLE;
                    $user->save();
                }
            }

            return response()->json(
                [
                    'message' => 'Profiles have been activated successfully.',
                    'success' => true
                ]
            );
        } catch (Exception $exception) {
            return response()->json(
                [
                    'message' => $exception->getMessage(),
                    'success' => false
                ]
            );
        }
    }
}
