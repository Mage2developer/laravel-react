<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Exception;

class GetCountryController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function show()
    {
        try {
            $country = Country::all();
            return response()->json(['message' => $country, 'success' => true]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }
}
