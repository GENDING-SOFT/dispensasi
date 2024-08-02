<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */

    //  Table siswa_mst {
    //     nis integer [pk]
    //     id_kelas integer [ref: > kelas_mst.id_kelas]
    //     nama_siswa varchar
    //     no_telepon varchar
    //   }

    public function up(): void
    {
        Schema::create('siswa_mst', function (Blueprint $table) {
            $table->bigIncrements('nis')->primary();
            $table->string('id_kelas');
            $table->string('nama_siswa');
            $table->string('no_telepon');
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
