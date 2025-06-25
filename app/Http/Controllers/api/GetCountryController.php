<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Exception;
use Illuminate\Http\JsonResponse;

class GetCountryController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function show(): JsonResponse
    {
        try {
            $country = Country::all();
            return response()->json(['success' => true, 'message' => 'Success.', 'data' => $country]);
        } catch (Exception $exception) {
            return response()->json(['success' => false, 'message' => $exception->getMessage()], 500);
        }
    }
}
