<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dispen extends Model
{
    use HasFactory;

    protected $table = 'dispen';
    protected $primaryKey = 'id_dispen';
    public $timestamps = true;

    protected $fillable = ['id_guru', 'alasan', 'deskripsi', 'waktu_awal', 'waktu_akhir', 'is_sampai_pulang'];

    public function guru()
    {
        return $this->belongsTo(GuruMst::class, 'id_guru', 'id_guru');
    }

    public function siswa()
    {
        return $this->belongsToMany(Siswa::class, 'dispen_siswa', 'id_dispen', 'id_siswa');
    }
}
