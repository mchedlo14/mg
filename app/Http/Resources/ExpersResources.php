<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ExpersResources extends JsonResource
{

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_id'=>$this->user_id,
            'first_name'=>$this->first_name,
            'last_name'=>$this->last_name,
            'phone' =>$this->phone,
            'services' => $this->services,
            'experience'=>$this->experience,
            'start_price' => $this->start_price,
            'verification'=>$this->verification,
            'places' => $this->places,
            'registration_date'=>$this->registration_date,
            'working_hour'=>$this->working_hour,
            'services_city' =>$this->services_city,
            'description' => $this->description,
        ];
    }
}
