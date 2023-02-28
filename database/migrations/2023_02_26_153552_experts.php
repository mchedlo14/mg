<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('experts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('phone')->nullable();
            $table->string('services')->nullable();
            $table->string('experience')->nullable();
            $table->string('start_price')->nullable();
            $table->string('verification')->nullable();
            $table->string('places')->nullable();
            $table->string('registration_date')->nullable();
            $table->string('working_hour')->nullable();
            $table->string('services_city')->nullable();
            $table->longText('description')->nullable();
            $table->timestamps();
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('experts');
    }
};
