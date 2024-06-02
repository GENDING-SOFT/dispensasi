<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', [\App\Controllers\UtamaController::class, 'home']);
$routes->get('/nismasuk', [\App\Controllers\UtamaController::class, 'nis']);
