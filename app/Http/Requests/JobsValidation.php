<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class JobsValidation extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'description_geo' => 'required',
            'description_en' =>'',
            'description_ru' =>'',
            'email' => 'required|email',
            'phone' => '',
            'name_geo' => 'required',
            'name_en' => '',
            'name_ru' => '',
            'salary_min' => 'required',
            'salary_max' => 'required',
            'age_min' => 'required',
            'age_max' => 'required',
            'last_date' => 'required',
            'en' => 'required',
            'program' => 'required',
            'place' => 'required',
            'category' => 'required',
            'working_hours' => 'required',
            'schedule' => 'required',
            'experience' => 'required',
            'degree' => 'required',
            'driving_license' => '',
            'position_geo' => 'required',
            'position_en' => '',
            'position_ru' => '',
        ];
    }
}
