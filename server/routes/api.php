<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

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

Route::get("/test", function () {
    return "test";
});

/**
 * pet
 */

// get
Route::get("/pet", function () {
    $list = DB::select("SELECT * FROM pet");
    return response()->json([
        'data' => $list,
        'code' => 1,
        'msg' =>'success',
    ]);
});

//create pet
Route::post("/pet", function (Request $request) {
    $name = $request->input("name");
    $species = $request->input("species");
    $date_birth = $request->input("date_birth");
    $date_death = $request->input("date_death");
    $remark = $request->input("remark");
    $data = DB::table("pet")->insert([
        'name'=> $name,
        'species'=> $species,
        'date_birth'=>$date_birth,
        'date_death'=>$date_death,
        'date_death'=>$date_death,
        'remark'=>$remark,
    ]);
    return response()->json(
        [
            'data' => $data,
            'code' => 1,
            'msg' =>'success',
        ]
    );
});

// update pet
Route::put("/pet/{id}", function (Request $request, $id) {
    $name = $request->input("name");
    $species = $request->input("species");
    $date_birth = $request->input("date_birth");
    $date_death = $request->input("date_death");
    $remark = $request->input("remark");
    $data = DB::table("pet")->where("id", $id)->update([
        'name'=> $name,
        'species'=> $species,
        'date_birth'=>$date_birth,
        'date_death'=> $date_death,
        'remark'=> $remark,
    ]);
    return response()->json(
        [
            'data' => $data,
            'code' => 1,
            'msg' =>'success',
        ]
    );
});

// get one pet
Route::get("/pet/{id}", function ($id) {
    $data = DB::table("pet")->where("id", $id)->first();
    Log::info($id);
    return response()->json(
        [
            'data' => $data,
            'code' => 1,
            'msg' =>'success',
        ]
    );
});

// del one pet
Route::delete("/pet/{id}", function ($id) {
    $data = DB::table("pet")->where("id", $id)->delete();
    Log::info($id);
    return response()->json(
        [
            'data' => $data,
            'code' => 1,
            'msg' =>'success',
        ]
    );
});

// get pet count
Route::get("/pet_count", function (){
   $allCount = DB::table("pet")->get();
    return response()->json(
        [
            'data' => $allCount,
            'code' => 1,
            'msg' =>'success',
        ]
    );
});


//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});


