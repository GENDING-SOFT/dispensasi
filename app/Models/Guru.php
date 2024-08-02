<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GuruMst extends Model
{
    use HasFactory;

    protected $table = 'guru_mst';
    protected $primaryKey = 'id_guru';
    public $timestamps = true;

    protected $fillable = ['nama_guru', 'mapel_ajar', 'no_whatsapp'];

    public function dispen()
    {
        return $this->hasMany(Dispen::class, 'id_guru', 'id_guru');
    }
}
