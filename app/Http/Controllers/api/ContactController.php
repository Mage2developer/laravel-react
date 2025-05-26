<?php

namespace App\Http\Controllers\api;

use App\Events\ContactEvent;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\Auth\ContactRequest;

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
