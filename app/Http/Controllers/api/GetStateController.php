<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\State;
use Exception;
use App\Http\Helper\Data;
use Illuminate\Http\JsonResponse;

class GetStateController extends Controller
{
    /**
     * @param string|int $id
     * @return JsonResponse
     */
    public function show($id = ''): JsonResponse
    {
        try {
            if($id) {
                $state = State::where(Data::COUNTRY_COLUMN_ID, $id)->get();
            } else {
                $state = State::all();
            }

            return response()->json(['success' => true, 'message' => 'Success.', 'data' => $state->toArray()]);
        } catch (Exception $exception) {
            return response()->json(['success' => false, 'message' => $exception->getMessage()], 500);
        }
    }
}
