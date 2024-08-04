<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */

    //  Table dispen {
    //     id_dispen integer [pk]
    //     id_guru integer [ref: > guru_mst.id_guru]
    //     alasan varchar
    //     deskripsi text [null]
    //     waktu_awal datetime
    //     waktu_akhir datetime [null]
    //     is_sampai_pulang bool [default: false]
    //   }

    public function up(): void
    {
        Schema::create('dispen', function (Blueprint $table) {
            $table->bigIncrements('id_dispen')->primary();
            $table->integer("nis");
            $table->unsignedBigInteger('id_guru');
            $table->string('alasan');
            $table->text('deskripsi')->nullable();
            $table->dateTime('waktu_awal')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->dateTime('waktu_akhir')->nullable();
            $table->boolean('is_sampai_pulang')->default(false);
            $table->foreign('id_guru')->references('id_guru')->on('guru_mst');
            $table->foreign('nis')->references('nis')->on('siswa_mst');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dispen');
    }
};
