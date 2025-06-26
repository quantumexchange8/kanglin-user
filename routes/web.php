<?php

use App\Http\Controllers\GuestController;
use App\Http\Controllers\GuestProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/**
 * ==============================
 *          Guest Routes
 * ==============================
 */

Route::get('/getLatestProducts', [GuestController::class, 'getLatestProducts'])->name('getLatestProducts');
Route::get('/getCategories', [GuestController::class, 'getCategories'])->name('getCategories');
Route::get('/products', [GuestProductController::class, 'products'])->name('products');
Route::get('/product-detail/{id}', [GuestProductController::class, 'productDetail'])->name('product-detail');

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
