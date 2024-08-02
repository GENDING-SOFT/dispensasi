<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */

    //  Table kelas_mst {
    //     id_kelas integer [pk]
    //     nama_kelas varchar
    //   }



    public function up(): void
    {
        Schema::create('kelas_mst', function (Blueprint $table) {

            $table->string('id_kelas')->primary();
            $table->string('nama_kelas');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kelas_mst');
    }
};
