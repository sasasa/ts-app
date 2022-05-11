<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        User::factory()->create(['email' => 'test1@google.com']);
        User::factory()->create(['email' => 'test2@google.com']);
        User::factory()->create(['email' => 'test3@google.com']);
    }
}
