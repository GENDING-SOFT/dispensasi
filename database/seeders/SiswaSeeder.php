<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("siswa_mst")->insert([
            "nis" => "16478",
            "nama_siswa" => "RIZIQ LILI ULIL ALBAB",
            "id_kelas" => "12pplg2"
        ]);
        DB::table("siswa_mst")->insert([
            "nis" => "16479",
            "nama_siswa" => "ROHIM ARBANGIN",
            "id_kelas" => "12pplg2"
        ]);
    }
}
