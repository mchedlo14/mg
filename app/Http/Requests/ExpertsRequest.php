<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExpertsRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'user_id'=>'',
            'first_name'=>'',
            'last_name'=>'',
            'phone' =>'',
            'services' => '',
            'experience'=>'',
            'start_price' => '',
            'verification'=>'',
            'places' => '',
            'registration_date'=>'',
            'working_hour'=>'',
            'services_city' =>'',
            'description' => ''
        ];
    }
}
