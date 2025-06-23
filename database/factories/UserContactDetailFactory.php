<?php

namespace Database\Factories;

use Faker\Core\Number;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserContactDetail>
 */
class UserContactDetailFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => '',
            'mobile_number' => $this->faker->phoneNumber(),
            'father_mobile_number' =>$this->faker->phoneNumber(),
            'native_address' => $this->faker->address,
            'foreign_address' => $this->faker->address,
            'address_line_1' => $this->faker->address,
            'address_line_2' => $this->faker->address,
            'city_id' => 0,
            'state_id' => 0,
            'country_id' => 0
        ];
    }
}



