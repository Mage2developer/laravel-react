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
            'mobile_number' => 'required|numeric|digits_between:10,15',
            'father_mobile_number' => 'nullable|numeric|digits_between:10,15',
            'native_address' => 'nullable|string|max:500',
            'foreign_address' => 'required_without:address_line_1,state_id,country_id|string|nullable|max:500',
            'address_line_1' => 'required_without:foreign_address|string|nullable|max:300',
            'address_line_2' => 'nullable|string|max:300',
            'city_id' => 'nullable|integer',
            'state_id' => 'required_without:foreign_address|nullable|integer',
            'country_id' => 'required_without:foreign_address|nullable|integer',
            'user_id' => 'required|exists:users,id'
        ];
    }
}
