<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Siswa extends Model
{
    use HasFactory;

    protected $table = 'siswa_mst';
    protected $primaryKey = 'nis';

    protected $fillable = ['id_kelas', 'nama_siswa', "nis"];

    public function kelas()
    {
        return $this->belongsTo(Kelas::class, 'id_kelas', 'id_kelas');
    }

    public function dispen()
    {
        return $this->belongsToMany(Dispen::class, 'dispen_siswa', 'id_siswa', 'id_dispen');
    }
}
