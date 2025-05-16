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
        /*User::factory(10)->create();
        User::factory(5)->unverified()->create();
        Task::factory(20)->create();*/

        /* User::factory()->create([
             'name' => 'Test User',
             'email' => 'test@example.com',
         ]);*/

        /*Book::factory(33)->create()->each(function (Book $book) {
            $numReview = random_int(5, 30);

            Review::factory($numReview)->count($numReview)->good()->for($book)->create();
        });

        Book::factory(33)->create()->each(function (Book $book) {
            $numReview = random_int(5, 30);

            Review::factory($numReview)->count($numReview)->average()->for($book)->create();
        });

        Book::factory(34)->create()->each(function (Book $book) {
            $numReview = random_int(5, 30);

            Review::factory($numReview)->count($numReview)->bad()->for($book)->create();
        });*/

        User::factory(50)->create()->each(function (User $user) {
            // UserPersonalDetail::factory()->for($user)->create();
            // UserContactDetail::factory()->for($user)->create();
            // UserEducationDetail::factory()->for($user)->create();
            // UserFamilyDetail::factory()->for($user)->create();
        });
    }
}
