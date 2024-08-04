<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class GuruController extends Controller
{

    public function __invoke()
    {
        $guru = Guru::all();
        return Inertia::render("Guru", [
            "guru" => $guru,
        ]);
    }

    public function store(Request $request)
    {

        Log::info($request->all());

        $request->validate([
            "nama_guru" => "required",
            "mapel_ajar" => "required",
            "no_whatsapp" => "required",
        ]);

        $storeData = $request->all();

        Guru::insert($storeData);

        redirect("/guru");
    }

}
