<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class GuestController extends Controller
{
    public function getLatestProducts()
    {

        $products = Product::where('status', 'active')->latest()->get();

        return response()->json($products);
    }
}
