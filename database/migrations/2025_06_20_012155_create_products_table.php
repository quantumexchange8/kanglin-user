<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('product_code')->unique();
            $table->decimal('product_price', 13, 2)->default(0.00);
            $table->decimal('product_pv', 13, 2)->default(0.00);
            $table->decimal('product_max_kp', 13, 2)->default(0.00);
            $table->integer('stock')->default(0);
            $table->longText('description')->nullable();
            $table->longText('instruction_desciption')->nullable();
            $table->longText('product_feature')->nullable();
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
