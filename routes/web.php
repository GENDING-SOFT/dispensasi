<?php

use App\Http\Controllers\DispenController;
use App\Http\Controllers\GuruController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SiswaController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', HomeController::class)->name('home');
Route::get('/total', [DispenController::class, 'total']);
Route::get("/dispen", [DispenController::class, "tambah"]);
Route::post("/dispen/store", [DispenController::class, "store"]);

Route::get("/siswa", SiswaController::class);
Route::post("/siswa/store", [SiswaController::class, "store"]);

Route::get("/guru", GuruController::class);
Route::delete("/guru/{id}", [GuruController::class, 'destroy']);
Route::post("/guru", [GuruController::class, "store"]);

Route::get("/siswa/get", [SiswaController::class, "getSiswa"]);
Route::get("/guru/get", [GuruController::class, 'getAll']);



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
