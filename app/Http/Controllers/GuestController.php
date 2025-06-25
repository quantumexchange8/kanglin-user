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

        $products->each(function ($product) {
            $product->product_thumbnail = $product->getFirstMediaUrl('product_thumbnail');
        });

        return response()->json($products);
    }

    public function getCategories()
    {

        $categories = Category::where('status', 'active')->with(['products'])->get(); 

        $categories->each(function ($category) {
            $category->products->each(function ($product) {
                $product->product_thumbnail = $product->getFirstMediaUrl('product_thumbnail');
            });
        });

        return response()->json($categories);
    }
}
