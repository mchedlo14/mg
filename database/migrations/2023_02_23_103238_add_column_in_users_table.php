<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('identification_code')->after('name');
            $table->string('legal_form')->after('identification_code');
            $table->string('phone')->after('legal_form');
            $table->string('country')->after('phone');
            $table->string('city')->after('country');
            $table->string('address')->after('city');
        });
    }


    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
