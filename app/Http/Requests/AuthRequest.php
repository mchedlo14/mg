<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthRequest extends FormRequest
{

    public function authorize(): bool
    {
        return false;
    }


    public function rules(): array
    {
        return [
            'name'=>'required',
            'identification_code'=>'required|numeric',
            'legal_form' => 'required',
            'phone' => 'required',
            'country'=>'',
            'email'=>'required',
            'city' =>'required',
            'address' =>'required',
            'password' => 'required|min:8',
        ];
    }
}
