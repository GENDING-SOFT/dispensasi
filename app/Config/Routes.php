<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', [\App\Controllers\UtamaController::class, 'home']);
$routes->get('/niskeluar', [\App\Controllers\UtamaController::class, 'niskeluar']);
$routes->get('/nismasuk', [\App\Controllers\UtamaController::class, 'nismasuk']);
$routes->get('/nismasuk/(:num)', [\App\Controllers\UtamaController::class, 'masuknis/$1']);
$routes->get('/nismasuk/res', [\App\Controllers\UtamaController::class, 'result/']);
