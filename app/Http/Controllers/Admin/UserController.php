<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
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
        $users = $query->paginate(10)->withQueryString();

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
}
