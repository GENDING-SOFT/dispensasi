<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/css/adminlte.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
        .dataUtama {
            width: 100vw;
            justify-content: center;
            gap: 10px;
            display: flex;
            flex-wrap: wrap;
        }

        .dataUtama>div {
            width: 300px;
            margin: 20px;
            padding: 10px;
        }

        .container {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .containerDalam {
            display: flex;
            gap: 20px;
        }


        /* button {
            margin-top: 30px;
        } */
    </style>
</head>

<body>


    <?php echo view('./components/navbar.php') ?>

    <div class="container">
        <div class="containerDalam">
            <div class="dataUtama">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title
                        "><?= $siswa[0]->nama_lengkap ?></h5>
                        <p class="card-text"><?= $siswa[0]->nis ?></p>
                        <p class="card-text"><?= $siswa[0]->kelas ?></p>

                        <a href="/nismasuk" class="btn btn-danger">Kembali</a>
                        <a href="/nismasuk" class="btn btn-primary">LANJUT</a>

                    </div>
                </div>
            </div>
        </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js"></script>
</body>

</html>