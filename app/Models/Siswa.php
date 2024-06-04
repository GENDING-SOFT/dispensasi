<?php

namespace App\Models;


class Siswa
{

    public $nis;
    public function __construct($nis)
    {
        $this->nis = $nis;
    }

    public function getSiswa()
    {
        $db = db_connect();
        $query = $db->query("SELECT * FROM siswa WHERE nis = '$this->nis'");
        return $query->getResult();
    }
}
