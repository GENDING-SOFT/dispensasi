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
        $guru = Guru::limit(10)->get();
        return Inertia::render("Guru", [
            "guru" => $guru
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

        public function destroy($id)
        {
            try {
                Guru::findOrFail($id)->delete();
                return redirect("/guru");
            } catch (\Illuminate\Database\QueryException $e) {
                
                return redirect("/guru");
            }
        }

}
