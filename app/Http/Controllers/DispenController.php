<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DispenController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Total');
    }

    public function tambah(Request $request)
    {





        return Inertia::render("Tambah");
    }
}
