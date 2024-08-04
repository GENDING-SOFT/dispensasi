<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GuruSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    //  $table->string('nama_guru');
    //         $table->string('mapel_ajar');
    //         $table->string('no_whatsapp');
    public function run(): void
    {
        DB::table("guru_mst")->insert([
            "nama_guru" => "RIZIQ S.T",
            "mapel_ajar" => "INFORMATIKA",
            "no_whatsapp" => "082132651658"
        ]);
        DB::table("guru_mst")->insert([
            "nama_guru" => "Fulana S.T",
            "mapel_ajar" => "INFORMATIKA",
            "no_whatsapp" => "082132651658"
        ]);

    }
}
