<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Http\Helper\Data;
use Exception;

class GetCityController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, $state_id)
    {
        try {
            $city = City::where(Data::STATE_COLUMN_ID, $state_id);
            return response()->json(['message' => $city, 'success' => true]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }
}
