<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */

    //  Table dispen_siswa {
    //     id_dispen integer [pk, ref: > dispen.id_dispen]
    //     id_siswa integer [pk, ref: > siswa_mst.nis]
    //   }

    public function up(): void
    {
        Schema::create('dispen_siswa', function (Blueprint $table) {
            $table->unsignedBigInteger('id_dispen');
            $table->unsignedBigInteger('id_siswa');

            $table->primary(['id_dispen', 'id_siswa']);
            $table->foreign('id_dispen')->references('id_dispen')->on('dispen');
            $table->foreign('id_siswa')->references('nis')->on('siswa_mst');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dispen_siswa');
    }
};
