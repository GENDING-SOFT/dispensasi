<?php

namespace App\Http\Controllers;

use App\Models\Kelas;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class SiswaController extends Controller
{
    public function __invoke()
    {
        $kelas = Kelas::all();
        return Inertia::render("Siswa", [
            'kelas' => $kelas,
        ]);
    }
    public function store(Request $request)
    {

        Log::info($request->all());
        $validation = $request->validate([
            "nis" => "required|unique:siswa_mst,nis",
            "nama_siswa" => "required",
            "id_kelas" => "required"
        ], [
            "nis.unique" => "NIS SUDAH ADA",
            "nis.required" => "NIS WAJIB DIISI",
            "nama.required" => "NAMA WAJIB DIISI",
            "kelas.required" => "KELAS WAJIB DIISI",
        ]);

        // Log::info($validation);

        Siswa::insert([
            "nis" => $request->nis,
            "nama_siswa" => $request->nama_siswa,
            "id_kelas" => $request->id_kelas
        ]);
        return redirect("/siswa");
    }

    public function getSiswa(Request $request)
    {
        $nis = $request->nis;
        $siswa = Siswa::find($nis);

        Log::info($siswa);
        return $siswa;
    }
}
