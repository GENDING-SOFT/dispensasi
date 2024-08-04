<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {


    public function up(): void
    {
        Schema::create('siswa_mst', function (Blueprint $table) {
            $table->integer('nis')->primary();
            $table->string('id_kelas');
            $table->string('nama_siswa');
            $table->string('no_telepon')->nullable();
            $table->foreign('id_kelas')->references('id_kelas')->on('kelas_mst');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('siswa_mst');
    }
};
