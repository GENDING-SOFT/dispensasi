<?php

namespace App\Http\Controllers;

use App\Models\Dispen;
use App\Models\Guru;
use App\Models\Siswa;
use App\Services\WhatsappMessg;
use Illuminate\Foundation\Events\DiscoverEvents;
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
    public function total(Request $request)
    {

        $hari_ini = date("Y-m-d");


        if ($request->has("tanggal")) {
            $dataAll = Dispen::query()->with('siswaMst')->with('guru')->where('waktu_awal', 'like', '%' . $request->tanggal . '%')->get();
        } else {
            $dataAll = Dispen::query()->with('siswaMst')->with('guru')->where('waktu_awal', 'like', '%' . $hari_ini . '%')->get();
        }



        return Inertia::render("Total", [
            "dataAll" => $dataAll,
            "tanggal" => $request->tanggal ?? $hari_ini,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            "id_guru" => "required",
            "alasan" => "required",
            "awal" => "required",
        ]);

        // Get nama siswa berdasarkan nis

        $siswa = [];

        foreach ($request->data_individu as $key => $value) {
            $siswa[] = Siswa::find($value['nis'])->nama_siswa;
        }


        $storeData = $request->data_individu; // array

        // $awal = $request->awal;
        // $akhir = $request->akhir || null;

        $nama_guru = Guru::find($request->id_guru)->nama_guru;
        $nomor_guru = Guru::find($request->id_guru)->no_whatsapp;

        $message = "
*DISPENSASI ONLINE*
\n
KEPADA YTH BPK/IBU {$nama_guru}

Dengan ini kami sampaikan bahwa siswa dengan data sebagai berikut:
        ";

        foreach ($siswa as $key => $value) {
            $message .= "
*Nama*: {$value}";
        }

        $message .= "
\n
MELAKUKAN DISPENSASI DENGAN ALASAN SEBAGAI BERIKUT: \n
*{$request->alasan}* \n

{$request->deskripsi} \n
";


        // fonnte

        // $wa = new WhatsappMessg($nomor_guru, $message);
        // $wa->send();

        $message .= "Terima kasih.";
        Log::info($message);
        // Log::info($storeData);

        Dispen::insert($storeData);
        redirect('home');
    }


}
