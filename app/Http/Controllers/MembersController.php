<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class MembersController extends Controller
{
    public function list(): Response
    {
        return Inertia::render('Members/List');
    }
}
