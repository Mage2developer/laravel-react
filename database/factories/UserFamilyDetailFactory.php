<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserFamilyDetail>
 */
class UserFamilyDetailFactory extends Factory
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
            'father_name' => $this->faker->name(),
            'mother_name' => $this->faker->name(),
            'brother_name' => $this->faker->name(),
            'brother_in_laws' => $this->faker->name(),
            'sister_name' => $this->faker->name(),
            'sister_in_laws' => $this->faker->name()
        ];
    }
}
