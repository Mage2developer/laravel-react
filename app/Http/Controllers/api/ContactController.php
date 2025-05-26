<?php

namespace App\Http\Controllers\api;

use App\Events\ContactEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\web\Auth\ContactRequest;
use Illuminate\Http\JsonResponse;

class ContactController extends Controller
{
    /**
     * @param ContactRequest $request
     * @return JsonResponse
     */
    public function createRequest(ContactRequest $request): JsonResponse
    {
        try {
            $request->validated();
            $data = $request->all();

            event(new ContactEvent($data));

            return response()->json(['message' => 'Your message has been sent successfully.', 'success' => true]);
        } catch (Exception $exception) {
            return response()->json(['message' => $exception->getMessage(), 'success' => false], 500);
        }
    }
}
