<?php

namespace App\Http\Controllers\Admin\web;

use App\Events\UserActivateEvent;
use App\Events\UserDeleteEvent;
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
            foreach ($idArray as $id) {
                $user = User::find($id);
                $user->delete();
            }

            return response()->json([
                'message' => 'Profiles are deleted permanently.',
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
     * Mass restore profiles, set is_deleted = 0 and status = 1
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function massRestoreProfiles(Request $request): JsonResponse
    {
        $idArray = $request->input('ids');

        try {
            foreach ($idArray as $userId) {
                $user = User::findorfail($userId);
                if ($user) {
                    $user->is_deleted = 0;
                    $user->status = 1;
                    $user->save();

                    $userData = $user->only(['name', 'email']);

                    // Email notification has been sent
                    event(new UserActivateEvent($userData));
                }
            }

            $message = 'Profiles are restored successfully.';

            return response()->json([
                'message' => $message,
                'success' => true,
                'profile_status' => 1
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage(),
                'success' => false,
                'profile_status' => 0
            ]);
        }
    }

    /**
     * Mass internal delete profiles, set is_deleted = 1 and status = 0
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function massInternalDelete(Request $request): JsonResponse
    {
        $idArray = $request->input('ids');
        $isDeleted = 1;
        $status = 0;
        $response = [
            'profile_status' => ['status' => $status, 'is_deleted' => $isDeleted],
        ];

        try {
            foreach ($idArray as $userId) {
                $user = User::findorfail($userId);
                if ($user) {
                    $user->is_deleted = $isDeleted;
                    $user->status = $status;
                    $user->save();
                    event(new UserDeleteEvent($user->email));
                }
            }
            $response['message'] = 'Profiles are deleted internally.';
            $response['success'] = true;
        } catch (Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }

    public function edit(Request $request)
    {
        $profileId = $request->route('profileId');

        $userProfile = $this->user->getUserProfileByIdFromAdmin($profileId);

        return Inertia::render('Admin/Users/Edit', [
            'profile' => $userProfile->toArray()
        ]);
    }

    public function activateProfile(Request $request)
    {
        $userId = $request->input('id');
        $status = $request->input('status');
        $strActive = $status ? "activated" : "inactivated";

        $response = [
            'profile_status' => ['status' => $status, 'is_deleted' => !$status],
        ];

        try {
            $user = User::findorfail($userId);
            if ($user) {
                $user->status = $status;
                if ($status) {
                    $user->is_deleted = !$status;
                }
                $user->save();

                if($status) {
                    $userData = $user->only(['name', 'email']);
                    event(new UserActivateEvent($userData));
                }

            }
            $response['message'] = 'Profile is ' . $strActive . ' successfully.';
            $response['success'] = true;
        } catch (Exception $exception) {
            $response['message'] = $exception->getMessage();
            $response['success'] = false;
        }
        return response()->json($response);
    }
}
