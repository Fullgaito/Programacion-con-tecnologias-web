<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return view('products.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //Va a la vista crear_productos
        return view("crear_productos");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //Toma los datos para guardarlos en la BD
        $product = new Product();
        $product->nombre = $request->nom;
        $product->descripcion = $request->descri;
        $product->precio = $request->precio;
        $product->save();
        return redirect()->route('products.index');
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //Se utiliza para consultar los datos a editar
        $producto=Producto::find($id);
        return view("editar:productos")->with("producto",$producto);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //Se hace el update en la base de datos
        $producto=Producto::find($id);
        $producto->nombre=$request->nom;
        $producto->descripcion =$request->descri;
        $producto->precio =$request->precio;
        $producto->save();
        return redirect()->route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //Para eliminar un registro de la base de datos
        $producto=Producto::find($id);
        $producto->delete();
        return redirect()->route('products.index');
    }
}