<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
            </tr>
        </thead>
        <tbody>
            @foreach($products as $product)
            <tr>
                <td>{{ $product->name }}</td>
                <td>{{ $product->price }}</td>
                <td>{{ $product->stock }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <form action="{{ route('products.store') }}" method="post">
        @csrf
        <label>Ingrese el nombre del producto:
            <input type="text" name="product_name" placeholder="Ingrese el nombre del producto">
        </label>

        <label>Ingrese el precio del producto:
            <input step="0.5" type="number" name="product_price" placeholder="Ingrese el precio del producto">
        </label>

        <label>Ingrese la cantidad de unidades del producto:
            <input type="number" name="product_stock" placeholder="Ingrese el stock del producto">
        </label>
        <br>
        <button type="submit">Guardar</button>
    </form>
</body>
</html>