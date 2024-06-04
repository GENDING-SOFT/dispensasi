<?php

namespace App\Controllers;

use CodeIgniter\HTTP\Request;
use App\Models\Siswa;

class UtamaController extends BaseController
{
    public function home(): string
    {
        return view('home');
    }
    public function niskeluar()
    {
        return view('niskeluar');
    }
    public function nismasuk()
    {

        $siswa = new Siswa(16478);
        $data = [
            'siswa' => $siswa->getSiswa()
        ];

        return view('nismasuk', $data);
    }
    public function masuknis($params)
    {
        $siswa = new Siswa($params);
        $data = [
            'siswa' => $siswa->getSiswa()
        ];

        return view('masuknis', $data);
    }
    public function result($params)
    {
        $siswa = new Siswa($params);
        $data = [
            'siswa' => $siswa->getSiswa()
        ];

        return view('masuknis', $data);
    }
}
