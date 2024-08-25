<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\File;

class TranslationController extends Controller
{
    /**
     * @param  string  $locale
     * @return JsonResponse
     */
    public function __invoke(string $locale): JsonResponse
    {
        if (file_exists(lang_path("$locale.json"))) {
            $file = File::json(lang_path("$locale.json"));
            return response()->json($file);
        }
        return response()->json([]);
    }
}
