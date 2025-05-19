<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserPersonalDetails>
 */
class UserPersonalDetailFactory extends Factory
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
            'dob' => fake()->date(),
            'marital_status' => $this->faker->numberBetween(0, 3),
            'height' => '5ft'.' 10inch',
            'weight' => '60 Kg',
            'manglik' => fake()->boolean,
            'have_specs' => fake()->boolean,
            'hobby' => Str::random(20),
            'sex' => fake()->boolean
        ];
    }
}
