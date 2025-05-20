<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Helper\Data;
use App\Http\Requests\api\UserEducationDetailRequest;
use App\Models\UserEducationDetail;

class UserEducationDetailController extends Controller
{
    public function update(UserEducationDetailRequest $request)
    {
        try {
            $request->validated();

            $educationDetail = UserEducationDetail::where(Data::USER_ID_FOREIGN_KEY, $request->user_id)->first();

            if ($request->user()->id !== $educationDetail->user_id) {
                return response()->json(
                    ['message' => 'You are not authorized to update this details.', 'error' => true],
                    403
                );
            }

            $educationDetail->update($request->all());
            return response()->json(['message' => 'Education details have been updated successfully.']);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'error' => true], 500);
        }
    }
}
