<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuestProductController extends Controller
{
    //

    public function products()
    {

        return Inertia::render('Guest/Products/ProductsListing');
    }

    public function productDetail($id)
    {

        $product = Product::find($id);

        $product->product_images = $product->getMedia('product_images')->map(function ($media) {
            return $media->getUrl();
        });

        return Inertia::render('Guest/Products/ProductDetail', [
            'product' => $product,
        ]);
    }
}
