<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\UserContactDetail;
use App\Models\UserEducationDetail;
use App\Models\UserFamilyDetail;
use App\Models\UserPersonalDetail;
use Illuminate\Database\Seeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create table of city state
        $this->call([
            CountriesTableSeeder::class,
            StatesTableSeeder::class,
            CitiesTableSeeder::class,
        ]);

        User::factory(50)->create()->each(function (User $user) {} );
    }
}
