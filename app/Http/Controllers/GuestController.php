<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class GuestController extends Controller
{
    public function getLatestProducts()
    {

        $products = Product::where('status', 'active')->latest()->get();

        return response()->json($products);
    }

    public function getCategories()
    {

        $categories = Category::where('status', 'active')->with(['products'])->get(); 

        return response()->json($categories);
    }
}
