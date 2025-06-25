<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_personal_details', function (Blueprint $table) {
            $table->id()->primary();
            $table->unsignedBigInteger('user_id');
            $table->string('dob');
            $table->smallInteger('marital_status');
            $table->boolean('sex');
            $table->string('height');
            $table->string('weight');
            $table->boolean('manglik');
            $table->boolean('have_specs');
            $table->text('hobby', 500)->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::create('user_education_details', function (Blueprint $table) {
            $table->id()->primary();
            $table->unsignedBigInteger('user_id');
            $table->string('education');
            $table->string('occupation')->nullable();
            $table->string('personal_income', 10)->nullable();
            $table->string('family_income', 10)->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::create('user_contact_details', function (Blueprint $table) {
            $table->id()->primary();
            $table->unsignedBigInteger('user_id');
            $table->string('mobile_number', 50)->nullable();
            $table->string('father_mobile_number', 50)->nullable();
            $table->string('native_city', 50)->nullable();
            $table->text('current_address', 300);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::create('user_family_details', function (Blueprint $table) {
            $table->id()->primary();
            $table->unsignedBigInteger('user_id');
            $table->string('father_name' );
            $table->string('mother_name');
            $table->string('brother_name')->nullable();
            $table->string('brother_in_laws')->nullable();
            $table->string('sister_name')->nullable();
            $table->string('sister_in_laws')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS = 0');
            Schema::dropIfExists('user_personal_details');
            Schema::dropIfExists('user_education_details');
            Schema::dropIfExists('user_contact_details');
            Schema::dropIfExists('user_family_details');
        DB::statement('SET FOREIGN_KEY_CHECKS = 1');
    }
};
