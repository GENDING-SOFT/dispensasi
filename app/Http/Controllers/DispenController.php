<?php

namespace App\Http\Controllers;

use App\Models\Dispen;
use App\Models\Guru;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DispenController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Total');
    }

    public function tambah()
    {
        $guru = Guru::all();
        return Inertia::render("Tambah", [
            "guru" => $guru,
        ]);
    }
    public function total()
    {
        return Inertia::render("Total");
    }

    public function store(Request $request)
    {

        $request->validate([
            "id_guru" => "required",
            "alasan" => "required",
        ]);

        $storeData = $request->data_individu;

        Dispen::insert($storeData);
        Log::info($storeData);
    }


}
