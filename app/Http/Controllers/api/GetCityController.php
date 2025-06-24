<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Http\Helper\Data;
use Exception;
use Illuminate\Http\JsonResponse;

class GetCityController extends Controller
{
    /**
     * @param string|int $id
     * @return JsonResponse
     */
    public function show($id = ''): JsonResponse
    {
        try {
            if($id) {
                $city = City::where(Data::STATE_COLUMN_ID, $id)->get();
            } else {
                $city = City::all();
            }
            return response()->json(['success' => true, 'message' => 'Success.', 'data' => $city->toArray()]);
        } catch (Exception $exception) {
            return response()->json(['success' => false, 'message' => $exception->getMessage()], 500);
        }
    }
}
