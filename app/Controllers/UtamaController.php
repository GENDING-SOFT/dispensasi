<?php

namespace App\Controllers;

class UtamaController extends BaseController
{
    public function home(): string
    {
        return view('home');
    }
    public function nis()
    {
        return view('nis');
    }
}
