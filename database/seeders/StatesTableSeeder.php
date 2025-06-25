<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\State;
use App\Models\Country;

class StatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // State::truncate(); // clear existing data before seeding

        $csvFile = database_path('data/states.csv');
        $data = array_map('str_getcsv', file($csvFile));
        $header = array_shift($data);

        foreach ($data as $row) {
            $stateData = array_combine($header, $row);

            // Find the country ID based on the country_id from CSV
            // Assuming your CSV country_id matches the actual ID in the countries table
            // If not, you might need to map by name or another unique identifier
            // $country = Country::where('id', $stateData['country_id'])->first();
            // if ($country) {
            //     $stateData['country_id'] = $country->id;
            // } else {
            //     // Handle case where country not found (e.g., skip or log)
            //     continue;
            // }

            State::create($stateData);
        }
    }
}
