<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserEducationDetail>
 */
class UserEducationDetailFactory extends Factory
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
            'education' =>  Str::random(10),
            'occupation' => $this->faker->jobTitle,
            'personal_income' => $this->faker->numberBetween(50000, 500000),
            'family_income' =>  $this->faker->numberBetween(50000, 500000),
        ];


    }
}
