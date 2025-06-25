<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Helper\Data;
use App\Models\State;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GetStateController extends Controller
{
    /**
     * @param string|int $id
     * @return JsonResponse
     */
    public function show($countryId = ''): JsonResponse
    {
        try {
            if ($countryId) {
                $state = State::where(Data::COUNTRY_COLUMN_ID, $countryId)->get();
            } else {
                $state = State::all();
            }

            return response()->json(['success' => true, 'message' => 'Success.', 'data' => $state->toArray()]);
        } catch (Exception $exception) {
            return response()->json(['success' => false, 'message' => $exception->getMessage()], 500);
        }
    }

    public function getStateById(Request $request): JsonResponse
    {
        try {
            $stateId = $request->route('id');
            $state = State::where('id', $stateId)->get();

            return response()->json(['success' => true, 'message' => 'Success.', 'data' => $state]);
        } catch (Exception $exception) {
            return response()->json(['success' => false, 'message' => $exception->getMessage()], 500);
        }
    }
}
