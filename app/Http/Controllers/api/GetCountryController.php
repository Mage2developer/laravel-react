<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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

    public function getCountryById(Request $request): JsonResponse
    {
        try {
            $countryId = $request->route('id');
            $country = Country::where('id', $countryId)->get();

            return response()->json(['success' => true, 'message' => 'Success.', 'data' => $country]);
        } catch (Exception $exception) {
            return response()->json(['success' => false, 'message' => $exception->getMessage()], 500);
        }
    }
}
