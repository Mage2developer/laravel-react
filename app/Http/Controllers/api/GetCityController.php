<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Helper\Data;
use App\Models\City;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GetCityController extends Controller
{
    /**
     * @param string|int $id
     * @return JsonResponse
     */
    public function show($id = ''): JsonResponse
    {
        try {
            if ($id) {
                $city = City::where(Data::STATE_COLUMN_ID, $id)->get();
            } else {
                $city = City::all();
            }
            return response()->json(['success' => true, 'data' => $city->toArray()]);
        } catch (Exception $exception) {
            return response()->json(['success' => false, 'message' => $exception->getMessage()], 500);
        }
    }

    public function getCityById(Request $request): JsonResponse
    {
        try {
            $cityId = $request->route('id');
            $city = City::where('id', $cityId)->first();

            return response()->json(['success' => true, 'data' => $city->city_name]);
        } catch (Exception $exception) {
            return response()->json(['success' => false, 'message' => $exception->getMessage()], 500);
        }
    }
}
