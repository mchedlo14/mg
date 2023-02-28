<?php

namespace App\Http\Controllers;

use App\Http\Requests\JobsValidation;
use App\Http\Resources\JobsResource;
use App\Models\Jobs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class JobsController extends Controller
{

    public function index()
    {
        return JobsResource::collection(Jobs::all());
    }



    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' =>'required',
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
            'gender' => ''

        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json([
                'error' => $errors
            ], 400);
        }

        if ($validator->passes()) {
            $data = [
                'user_id' => $request['user_id'],
                'description_geo' => $request['description_geo'],
                'description_en' => $request['description_en'] ?: "",
                'description_ru' => $request['description_ru'] ?: "",
                'email' => $request['email'],
                'phone' => $request['phone'] ?: "",
                'name_geo' => $request['name_geo'],
                'name_en' => $request['name_en'] ?: "",
                'name_ru' => $request['name_ru'] ?: "",
                'salary_min' => $request['salary_min'],
                'salary_max' => $request['salary_max'],
                'age_min' => $request['age_min'],
                'age_max' => $request['age_max'],
                'last_date' => $request['last_date'],
                'en' => $request['en'],
                'program' => $request['program'],
                'place' => $request['place'],
                'category' => $request['category'],
                'working_hours' => $request['working_hours'],
                'schedule' => $request['schedule'],
                'experience' => $request['experience'],
                'degree' => $request['degree'],
                'gender' => $request['gender']?:"",
                'driving_license' => $request['driving_license'] ?: "",
                'position_geo' => $request['position_geo'],
                'position_en' => $request['position_en'] ?: "",
                'position_ru' => $request['position_ru'] ?: "",
            ];
        }



        $job = Jobs::create($data);
        return new JobsResource($job);
    }


    public function show($id)
    {
        return new JobsResource(Jobs::FindOrfail($id));
    }




    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'user_id' =>'required',
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
            'gender' => ''

        ]);


        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json([
                'error' => $errors
            ], 400);
        }



        if ($validator->passes()) {
            $data = [
                'user_id' => $request['user_id'],
                'description_geo' => $request['description_geo'],
                'description_en' => $request['description_en'] ?: "",
                'description_ru' => $request['description_ru'] ?: "",
                'email' => $request['email'],
                'phone' => $request['phone'] ?: "",
                'name_geo' => $request['name_geo'],
                'name_en' => $request['name_en'] ?: "",
                'name_ru' => $request['name_ru'] ?: "",
                'salary_min' => $request['salary_min'],
                'salary_max' => $request['salary_max'],
                'age_min' => $request['age_min'],
                'age_max' => $request['age_max'],
                'last_date' => $request['last_date'],
                'en' => $request['en'],
                'program' => $request['program'],
                'place' => $request['place'],
                'category' => $request['category'],
                'working_hours' => $request['working_hours'],
                'schedule' => $request['schedule'],
                'experience' => $request['experience'],
                'degree' => $request['degree'],
                'gender' => $request['gender']?:"",
                'driving_license' => $request['driving_license'] ?: "",
                'position_geo' => $request['position_geo'],
                'position_en' => $request['position_en'] ?: "",
                'position_ru' => $request['position_ru'] ?: "",
            ];
            $job = Jobs::where('id',$id)->update($data);
            if ($job){
                $resp = [
                    'status'=>'success',
                    'code' => '201'
                ];

                return  $resp;
            }
        }

    }


    public function destroy($id)
    {
        Jobs::find($id)->delete();
        return response()->noContent();
    }
}
