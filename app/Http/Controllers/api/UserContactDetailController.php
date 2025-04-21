<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\api\UserContactDetailRequest;
use App\Models\UserContactDetail;
use Exception;
use App\Http\Helper\Data;

class UserContactDetailController extends Controller
{
    public function update(UserContactDetailRequest $request)
    {
        $request->validated();

        try {
            $contactDetail = UserContactDetail::where(Data::USER_ID_FOREIGN_KEY, $request->user_id)->first();

            if ($request->user()->id !== $contactDetail->user_id) {
                return response()->json(
                    ['message' => 'You are not authorized to update this details.', 'success' => false],
                    403
                );
            }

            $contactDetail->update($request->all());
            return response()->json(['message' => 'Contact details updated successfully', 'success' => true]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }
}
