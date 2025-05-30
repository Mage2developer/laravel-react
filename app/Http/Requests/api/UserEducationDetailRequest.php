<?php

namespace App\Http\Requests\api;

use Illuminate\Foundation\Http\FormRequest;

class UserEducationDetailRequest extends FormRequest
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
            'education' => 'required|string|max:100',
            'occupation' => 'required|string|max:50',
            'personal_income' => 'required|numeric|digits_between:0,10',
            'family_income' => 'nullable|numeric|digits_between:0,10',
            'user_id' => 'required|exists:users,id'
        ];
    }
}
