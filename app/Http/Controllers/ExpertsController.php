<?php

namespace App\Http\Controllers;
use App\Http\Requests\ExpertsRequest;
use App\Http\Resources\ExpersResources;
use App\Http\Resources\JobsResource;
use App\Models\Experts;

class ExpertsController extends Controller
{

    public function index()
    {
        return ExpersResources::collection(Experts::all());
    }


    public function store(ExpertsRequest $request)
    {
       $data = $request->validated();
       $experts=Experts::create($data);
       return new JobsResource($experts);
    }

    public function show($id)
    {
        return new ExpersResources(Experts::FindOrfail($id));
    }


    public function update(ExpertsRequest $request, $id)
    {

        $data = $request->validated();
        $expert = Experts::where('id',$id)->update($data);
        return response('success','200');
    }


    public function destroy($id)
    {
        Experts::find($id)->delete();
        return response()->noContent();
    }
}
