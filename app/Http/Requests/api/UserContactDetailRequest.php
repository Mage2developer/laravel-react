<?php

namespace App\Http\Requests\api;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UserContactDetailRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'mobile_number' => 'required|max:50',
            'father_mobile_number' => 'max:50',
            'native_city' => 'required|string|max:50',
            'current_address' => 'required|string|max:300',
            'user_id' => 'required|exists:users,id'
        ];
    }
}
