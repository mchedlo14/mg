<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ExpertsController;
use App\Http\Controllers\JobsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', [AuthController::class, 'getUser']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('/jobs',JobsController::class);
    Route::apiResource('/experts',ExpertsController::class);
    Route::post('/update_job/{id}',[JobsController::class,'update'])->name('update_job');
    Route::post('/update_experts/{id}',[ExpertsController::class,'update'])->name('update_expert');
});
Route::post('/login', [AuthController::class, 'login']);
Route::post('/registration',[AuthController::class,'register'])->name('registration');


