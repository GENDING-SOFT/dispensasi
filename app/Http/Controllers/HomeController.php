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
        date_default_timezone_set("Asia/Jakarta");

        $dataCount2Minggu = [];
        $label2Minggu = [];

        for ($i = 0; $i <= 14; $i++) {
            $date = date('Y-m-d', strtotime('-' . $i . ' days'));
            $count = Dispen::where('waktu_awal', 'like', '%' . $date . '%')->count();
            $dataCount2Minggu[] = $count;
            $label2Minggu[] = date('d M', strtotime($date));
        }
        $today = date('Y-m-d');

        Log::info($today);
        $dispenCount = Dispen::count();
        $hariIni = Dispen::where('waktu_awal', 'like', '%' . $today . '%')->count();

        return Inertia::render('Home', [
            'dispenCount' => $dispenCount,
            'hariIniCount' => $hariIni,
            "data2_minggu" => array_reverse($dataCount2Minggu),
            "label2_minggu" => array_reverse($label2Minggu),
            "count2minggu" => array_sum($dataCount2Minggu),
        ]);

    }
}
