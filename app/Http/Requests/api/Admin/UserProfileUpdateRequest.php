<?php

namespace App\Http\Requests\api\Admin;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserProfileUpdateRequest extends FormRequest
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
       $profileId = $this->route('profileId');

       return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|' . Rule::unique('users', 'email')->ignore($profileId),
        ];
    }
}
