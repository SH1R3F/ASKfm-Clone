<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;

Route::get('/translations/{locale}', function (string $locale) {
    if (file_exists(lang_path("$locale.json"))) {
        $file = File::json(lang_path("$locale.json"));
        return response()->json($file);
    }
    return response()->json([]);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
