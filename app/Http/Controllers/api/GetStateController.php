<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\State;
use Exception;
use App\Http\Helper\Data;
use Illuminate\Http\Request;

class GetStateController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, $country_id)
    {
        try {
            $state = State::where(Data::COUNTRY_COLUMN_ID, $country_id);

            return response()->json(['message' => $state, 'success' => true]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }
}
