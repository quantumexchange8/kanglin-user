<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Category;
use App\Models\Country;
use App\Models\Product;
use App\Models\State;
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
        if ($request->guest_token) {
            $findCart = Cart::where('guest_token', $request->guest_token)->first();
    
            $getCartQty = CartItem::where('cart_id', $findCart->id)->count();
        } else {
            $getCartQty = 0;
        }

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

    public function guestCart(Request $request)
    {

        $cartItem = null;

        if ($request->guest_token) {
            $cart = Cart::where('guest_token', $request->guest_token)->first();

            if ($cart) {
                $cartItem = CartItem::where('cart_id', $cart->id)
                    ->with(['product'])
                    ->get();

                $cartItem->each(function ($item) {
                    if ($item->product) {
                        $item->product->product_thumbnail = $item->product->getFirstMediaUrl('product_thumbnail');
                    }
                });
            }
        }
        
        return Inertia::render('Guest/Cart/Cart', [
            'cartItem' => $cartItem,
        ]);

    }

    public function guestUpdateCart(Request $request)
    {

        $request->validate([
            'cart_item_id' => 'required|exists:cart_items,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $item = CartItem::findOrFail($request->cart_item_id);
        $item->quantity = $request->quantity;
        $item->total_price = $item->price * $request->quantity;
        $item->save();

        return response()->json(['success' => true]);
    }

    public function guestDeleteCart(Request $request)
    {
        
        $cartItem = CartItem::find($request->cart_item_id);

        $cartItem->delete();

        return response()->json(['success' => true]);
    }

    public function guestCheckout(Request $request)
    {
        $cartItemIds = $request->input('cart_items', []);

        $cartItems = CartItem::whereIn('id', $cartItemIds)
            ->with('product')
            ->get();

        $cartItemsTotalAmount = CartItem::whereIn('id', $cartItemIds)
            ->sum('total_price');

        $cartItems->each(function ($item) {
            if ($item->product) {
                $item->product->product_thumbnail = $item->product->getFirstMediaUrl('product_thumbnail');
            }
        }); 


        return Inertia::render('Guest/Checkout/Checkout', [
            'cartItems' => $cartItems,
            'totalAmount' => $cartItemsTotalAmount
        ]);
    }

    public function getPhoneCode()
    {

        $phoneCodes = Country::get();

        return response()->json($phoneCodes);
    }

    public function getState()
    {

        $states = State::all()->map(function ($state) {
            $state->AreaList = json_decode($state->AreaList);
            return $state;
        });

        return response()->json($states);
    }

    public function placeOrder(Request $request)
    {

        return redirect()->back();
    }

    public function orderPlacedSuccesfull()
    {

        return Inertia::render('Guest/PlacedSuccesful');
    }
}
