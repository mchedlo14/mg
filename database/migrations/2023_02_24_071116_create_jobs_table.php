<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->longText('description_geo');
            $table->longText('description_en');
            $table->longText('description_ru');
            $table->string('email');
            $table->string('phone');
            $table->longText('name_geo');
            $table->longText('name_en');
            $table->longText('name_ru');
            $table->string('salary_min');
            $table->string('salary_max');
            $table->string('age_min');
            $table->string('age_max');
            $table->string('last_date');
            $table->string('en');
            $table->string('program');
            $table->string('gender');
            $table->string('place');
            $table->string('category');
            $table->string('working_hours');
            $table->string('schedule');
            $table->string('experience');
            $table->string('degree');
            $table->string('driving_license');
            $table->string('position_geo');
            $table->string('position_en');
            $table->string('position_ru');

            $table->timestamps();
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
