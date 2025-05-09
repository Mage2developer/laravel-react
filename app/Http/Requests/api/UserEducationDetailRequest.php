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
            'education' => 'required|max:50',
            'occupation' => 'required|max:50',
            'personal_income' => 'required|string|max:10',
            'family_income' => 'required|string|max:10',
            'user_id' => 'required|exists:users,id'
        ];
    }
}
