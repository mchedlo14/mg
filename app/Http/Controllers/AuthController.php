<?php

namespace App\Http\Controllers;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request){


        $validator = Validator::make($request->all(), [
            'name'=>'required',
            'identification_code'=>'required|numeric',
            'legal_form' => 'required',
            'phone' => 'required',
            'country'=>'',
            'email'=>'required|email',
            'city' =>'required',
            'address' =>'required',
            'password' => 'required|min:8',

        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json([
                'error' => $errors
            ], 400);
        }



        if ($validator->passes()) {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'identification_code' => $request['identification_code'],
                'legal_form' => $request['legal_form'],
                'phone' => $request['phone'],
                'country' => $request['country'] ?: "",
                'city' => $request['city'],
                'address' => $request['address'],
            ]);

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
            ]);
        }

    }


    public function login(Request $request){
        $credentials = $request->validate([
            'email'=> ['required', 'email'],
            'password' => 'required',
            'remember' => 'boolean'
        ]);
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);
        if (!Auth::attempt($credentials, $remember)) {
            return response([
                'message' => 'Email or password is incorrect'
            ], 422);
        }

        $user = Auth::user();

        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => new UserResource($user),
            'token' => $token
        ]);

    }
    public function logout()
    {

        $user = Auth::user();
        $user->currentAccessToken()->delete();

        return response('', 204);
    }

    public function getUser(Request $request)
    {
        return new UserResource($request->user());
    }
}
