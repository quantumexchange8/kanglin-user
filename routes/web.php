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
Route::post('/guest-add-cart', [GuestProductController::class, 'guestAddCart'])->name('guest-add-cart');
Route::get('/getQuantity', [GuestProductController::class, 'getQuantity'])->name('getQuantity');
Route::get('/category-product/{id}', [GuestProductController::class, 'categoryProduct'])->name('category-product');
Route::get('/getCategoryProduct', [GuestProductController::class, 'getCategoryProduct'])->name('getCategoryProduct');
Route::get('/guest/cart', [GuestProductController::class, 'guestCart'])->name('guest-cart');
Route::post('/guest-update-cart', [GuestProductController::class, 'guestUpdateCart'])->name('guest-update-cart');
Route::post('/guest-delete-cart', [GuestProductController::class, 'guestDeleteCart'])->name('guest-delete-cart');

Route::get('/guest-checkout', [GuestProductController::class, 'guestCheckout'])->name('guest-checkout');

Route::get('/getPhoneCode', [GuestProductController::class, 'getPhoneCode'])->name('getPhoneCode');
Route::get('/getState', [GuestProductController::class, 'getState'])->name('getState');


Route::post('/place-order', [GuestProductController::class, 'placeOrder'])->name('place-order');
Route::get('/order-placed-succesfull', [GuestProductController::class, 'orderPlacedSuccesfull'])->name('order-placed-succesfull');



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
