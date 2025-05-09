<?php

namespace App\Http\Requests\api;

use Illuminate\Foundation\Http\FormRequest;

class UserPersonalDetailRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'dob' => 'required|max:50',
            'marital_status' => 'required|max:5',
            'height' => 'required|string|max:15',
            'weight' => 'required|string|max:15',
            'manglik' => 'boolean',
            'have_specs' => 'boolean',
            'hobby' => 'string|max:500',
            'user_id' => 'required|exists:users,id'
        ];
    }
}
