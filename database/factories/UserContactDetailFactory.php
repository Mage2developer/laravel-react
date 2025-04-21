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
            'native_city' => $this->faker->city,
            'current_address' => $this->faker->address
        ];
    }
}



