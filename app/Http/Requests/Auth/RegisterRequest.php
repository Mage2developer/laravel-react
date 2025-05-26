<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class RegisterRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'mobile_number' => 'required|numeric|digits_between:10,15',
            'dob' => 'required|string|max:50',
            'personal_income' => 'required|numeric|digits_between:0,10',
            'education' => 'required|string|max:100',
            'occupation' => 'required|string|max:50',
            'father_name' => 'required|string|max:100',
            'mother_name' => 'required|string|max:100',
            'password' => ['required', 'confirmed', Rules\Password::defaults()]
        ];
    }
}
