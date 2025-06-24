<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\State;
use Exception;
use App\Http\Helper\Data;

class GetStateController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id = '')
    {
        try {
            if($id) {
                $state = State::where(Data::COUNTRY_COLUMN_ID, $id);
            } else {
                $state = State::all();
            }

            return response()->json(['message' => $state, 'success' => true]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }
}
