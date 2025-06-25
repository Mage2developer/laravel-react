<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\City;
use App\Models\State;

class CitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // City::truncate(); // clear existing data before seeding

        $csvFile = database_path('data/cities.csv');
        $data = array_map('str_getcsv', file($csvFile));
        $header = array_shift($data);

        foreach ($data as $row) {
            $cityData = array_combine($header, $row);

            // Find the state ID based on the state_id from CSV
            // Assuming your CSV state_id matches the actual ID in the states table
            // If not, you might need to map by name or another unique identifier
            // $state = State::where('id', $cityData['state_id'])->first();
            // if ($state) {
            //     $cityData['state_id'] = $state->id;
            // } else {
            //     // Handle case where state not found (e.g., skip or log)
            //     continue;
            // }

            City::create($cityData);
        }
    }
}
