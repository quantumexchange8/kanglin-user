<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;

class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jsonFilePath = base_path('database/seeders/TaiwanState.json');

        // Read JSON file
        $json = File::get($jsonFilePath);
        
        // Decode JSON data into an array
        $data = json_decode($json, true);

        foreach ($data as $state) {
            DB::table('states')->insert([
                'CityName' => $state['CityName'],
                'CityEngName' => $state['CityEngName'],
                'AreaList' => json_encode($state['AreaList']), // 🔥 Important
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
