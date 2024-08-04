<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KelasSeeder extends Seeder
{

    // AKL MEMPUNYAI 4 ROMBEL PER MASING-MASING 10, 11, 12
    // MPLB MEMPUNYAI 3 ROMBEL PER MASING-MASING KELAS 10, 11, 
    // PMS MEMPUNYAI 3 ROMBEL PER MASING-MASING KELAS 10, 11, 
    // DKV MEMPUNYAI 2 ROMBEL PER MASING-MASING KELAS 10, 11, 
    // PPLG MEMPUNYAI 2 ROMBEL PER MASING-MASING KELAS 10, 11, 


    public function run(): void
    {
        DB::table('kelas_mst')->insert([
            'id_kelas' => '10akl1',
            "nama_kelas" => "X AKL 1"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '10akl2',
            "nama_kelas" => "X AKL 2"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '10akl3',
            "nama_kelas" => "X AKL 3"
        ]);

        DB::table("kelas_mst")->insert([
            'id_kelas' => '10akl4',
            "nama_kelas" => "X AKL 4"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '11akl1',
            "nama_kelas" => "XI AKL 1"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '11akl2',
            "nama_kelas" => "XI AKL 2"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '11akl3',
            "nama_kelas" => "XI AKL 3"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '11akl4',
            "nama_kelas" => "XI AKL 4"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '12akl1',
            "nama_kelas" => "XII AKL 1"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '12akl2',
            "nama_kelas" => "XII AKL 2"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '12akl3',
            "nama_kelas" => "XII AKL 3"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '12akl4',
            "nama_kelas" => "XII AKL 4"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '10mplb1',
            "nama_kelas" => "X MPLB 1"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '10mplb2',
            "nama_kelas" => "X MPLB 2"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '10mplb3',
            "nama_kelas" => "X MPLB 3"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '11mplb1',
            "nama_kelas" => "XI MPLB 1"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '11mplb2',
            "nama_kelas" => "XI MPLB 2"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '11mplb3',
            "nama_kelas" => "XI MPLB 3"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '12mplb1',
            "nama_kelas" => "XII MPLB 1"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '12mplb2',
            "nama_kelas" => "XII MPLB 2"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '12mplb3',
            "nama_kelas" => "XII MPLB 3"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '10pms1',
            "nama_kelas" => "X PMS 1"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '10pms2',
            "nama_kelas" => "X PMS 2"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '10pms3',
            "nama_kelas" => "X PMS 3"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '11pms3',
            "nama_kelas" => "XI PMS 3"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '11pms2',
            "nama_kelas" => "XI PMS 2"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '11pms1',
            "nama_kelas" => "XI PMS 1"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '12pms1',
            "nama_kelas" => "XII PMS 1"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '12pms2',
            "nama_kelas" => "XII PMS 2"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '12pms3',
            "nama_kelas" => "XII PMS 3"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '10dkv1',
            "nama_kelas" => "X DKV 1"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '10dkv2',
            "nama_kelas" => "X DKV 2"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '11dkv1',
            "nama_kelas" => "XI DKV 1"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '11dkv2',
            "nama_kelas" => "XI DKV 2"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '12dkv1',
            "nama_kelas" => "XII DKV 1"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '12dkv2',
            "nama_kelas" => "XII DKV 2"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '10pplg1',
            "nama_kelas" => "X PPLG 1"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '10pplg2',
            "nama_kelas" => "X PPLG 2"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '11pplg1',
            "nama_kelas" => "XI PPLG 1"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '11pplg2',
            "nama_kelas" => "XI PPLG 2"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '12pplg1',
            "nama_kelas" => "XII PPLG 1"
        ]);
        DB::table("kelas_mst")->insert([
            'id_kelas' => '12pplg2',
            "nama_kelas" => "XII PPLG 2"
        ]);







    }
}
