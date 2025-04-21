<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Helper\Data;
use App\Http\Requests\api\UserFamilyDetailRequest;
use App\Models\UserFamilyDetail;

class UserFamilyDetailController extends Controller
{
    public function update(UserFamilyDetailRequest $request)
    {
        $request->validated();

        try {
            $familyDetail = UserFamilyDetail::where(Data::USER_ID_FOREIGN_KEY, $request->user_id)->first();

            if ($request->user()->id !== $familyDetail->user_id) {
                return response()->json(
                    ['message' => 'You are not authorized to update this details.', 'success' => false],
                    403
                );
            }

            $familyDetail->update($request->all());
            return response()->json(['message' => 'Family details updated successfully', 'success' => true]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }
}
