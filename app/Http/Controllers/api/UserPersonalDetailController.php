<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\api\UserPersonalDetailRequest;
use App\Models\UserPersonalDetail;
use App\Http\Helper\Data;

class UserPersonalDetailController extends Controller
{
    public function update(UserPersonalDetailRequest $request)
    {
        try {
            $request->validated();

            $personalDetail = UserPersonalDetail::where(Data::USER_ID_FOREIGN_KEY, $request->user_id)->first();

            if ($request->user()->id !== $personalDetail->user_id) {
                return response()->json(
                    ['message' => 'You are not authorized to update this details.', 'success' => false],
                    403
                );
            }

            $personalDetail->update($request->all());
            return response()->json(['message' => 'Personal details have been updated successfully', 'success' => true]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }
}
