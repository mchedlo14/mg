<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class JobResource extends JsonResource
{

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'description_geo' => $this->description_geo,
            'description_en' => $this->description_en,
            'description_ru' => $this->description_ru,
            'email' => $this->email,
            'phone' => $this->phone,
            'name_geo' => $this->name_geo,
            'name_en' => $this->name_en,
            'name_ru' => $this->name_ru,
            'salary_min' => $this->salary_min,
            'salary_max' => $this->salary_max,
            'age_min' => $this->age_min,
            'age_max' => $this->age_max,
            'last_date' => $this->last_date,
            'en' => $this->en,
            'program' => $this->program,
            'place' => $this->place,
            'category' => $this->category,
            'working_hours' => $this->working_hours,
            'schedule' => $this->schedule,
            'experience' => $this->experience,
            'degree' => $this->degree,
            'driving_license' => $this->driving_license,
            'position_geo' => $this->position_geo,
            'position_en' => $this->position_en,
            'position_ru' => $this->position_ru,
        ];
    }
}
