<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Country;

class CountriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Country::truncate(); // clear existing data before seeding

        $csvFile = database_path('data/countries.csv');
        $data = array_map('str_getcsv', file($csvFile));
        $header = array_shift($data); // Get the header row

        foreach ($data as $row) {
            $countryData = array_combine($header, $row);
            Country::create($countryData);
        }
    }
}
