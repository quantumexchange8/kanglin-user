<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

        $product->product_thumbnail = $product->getFirstMediaUrl('product_thumbnail');

        $product->product_images = $product->getMedia('product_images')->map(function ($media) {
            return $media->getUrl();
        });

        return Inertia::render('Guest/Products/ProductDetail', [
            'product' => $product,
        ]);
    }

    public function guestAddCart(Request $request)
    {

        $request->validate([
            'guest_token' => 'required|string',
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1'
        ]);

        $product = Product::find($request->product_id);

        $cart = Cart::firstOrCreate([
            'guest_token' => $request->guest_token,
        ]);
    
        $cartItem = $cart->items()->firstOrNew(['product_id' => $request->product_id]);

        $cartItem->price = $product->product_price;
        $cartItem->quantity = ($cartItem->exists ? $cartItem->quantity : 0) + $request->quantity;
        $cartItem->total_price = $cartItem->price * $cartItem->quantity;
        $cartItem->save();

        return response()->json(['message' => 'Product added to cart'], 201);
    }

    public function getQuantity(Request $request)
    {

        $findCart = Cart::where('guest_token', $request->uuid)->first();

        $getCartQty = CartItem::where('cart_id', $findCart->id)->count();

        return response()->json($getCartQty);
    }

    public function categoryProduct($id)
    {

        $category = Category::find($id);

        return Inertia::render('Guest/Category/ProductListing', [
            'category' => $category,
        ]);

    }

    public function getCategoryProduct(Request $request)
    {

        $products = Product::where('category_id', $request->id)
        ->paginate($request->per_page ?? 6);

        $products->each(function($product) {
            $product->product_thumbnail = $product->getFirstMediaUrl('product_thumbnail');
        });

        return response()->json($products);
    }
}
