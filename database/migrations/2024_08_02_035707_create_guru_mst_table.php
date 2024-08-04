<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    public function up(): void
    {
        Schema::create('guru_mst', function (Blueprint $table) {
            $table->bigIncrements('id_guru')->primary();
            $table->string('nama_guru');
            $table->string('mapel_ajar');
            $table->string('no_whatsapp');

        });
    }


    public function down(): void
    {
        Schema::dropIfExists('guru_mst');
    }
};
