<?php

namespace App\Http\Controllers;

use App\Models\Dispen;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {

        $today = date('Y-m-d');
        $dispenCount = Dispen::count();
        $hariIni = Dispen::where('waktu_awal', 'like', '%' . $today . '%')->count();

        Log::info($hariIni);

        return Inertia::render('Home', [
            'dispenCount' => $dispenCount,
            'hariIniCount' => $hariIni
        ]);

    }
}
