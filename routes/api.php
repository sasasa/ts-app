<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/users', function () {
    return [
        [
            "id" => 1,
            "name" => "さえき",
            "age" => 28,
            "color" => 'red',
            "hobbies" => ["プログラム","ラップ"],
        ],
        [
            "id" => 2,
            "name" => "ごとうさん",
            "age" => 41,
            "hobbies" => ["自転車","筋トレ"],
        ],
        [
            "id" => 3,
            "name" => "のりお",
            "age" => 16,
            "color" => 'blue',
        ],
    ];
});