<?php

namespace App\Http\Requests\api;

use Illuminate\Foundation\Http\FormRequest;

class UserFamilyDetailRequest extends FormRequest
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
            'father_name' => 'required|string|max:100',
            'mother_name' => 'required|string|max:100',
            'brother_name' => 'nullable|string|max:100',
            'brother_in_laws' => 'nullable|string|max:100',
            'sister_name' => 'nullable|string|max:100',
            'sister_in_laws' => 'nullable|string|max:100',
            'user_id' => 'required|exists:users,id'
        ];
    }
}
