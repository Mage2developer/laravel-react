<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->id()->primary();
            $table->string('country_name');
        });

        Schema::create('states', function (Blueprint $table) {
            $table->id()->primary();
            $table->unsignedBigInteger('country_id')->unsigned();
            $table->string('state_name');
            $table->foreign('country_id')->references('id')->on('countries')
                ->onDelete('cascade');
        });

        Schema::create('cities', function (Blueprint $table) {
            $table->id()->primary();
            $table->unsignedBigInteger('state_id')->unsigned();
            $table->string('city_name');
            $table->foreign('state_id')->references('id')->on('states')
                ->onDelete('cascade');
        });

        Schema::table('user_contact_details', function (Blueprint $table) {
            $table->renameColumn('native_city', 'native_address');
            $table->text('native_address')->nullable()->change();

            $table->renameColumn('current_address', 'address_line_1');
            $table->string('address_line_1', 300)->nullable()->change();

            $table->string('address_line_2', 300)->nullable();

            $table->unsignedBigInteger('city_id')->nullable();
            $table->foreign('city_id')->references('id')->on('cities')
                ->onDelete('cascade');

            $table->unsignedBigInteger('state_id')->nullable();
            $table->foreign('state_id')->references('id')->on('states')
                ->onDelete('cascade');

            $table->unsignedBigInteger('country_id')->nullable();
            $table->foreign('country_id')->references('id')->on('countries')
                ->onDelete('cascade');

            $table->text('foreign_address')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('countries');

        Schema::dropIfExists('states');

        Schema::dropIfExists('cities');
    }
};
