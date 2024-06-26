<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Productos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <div class="contanier text-center">
        <form action="{{route('productos.store')}}" method="post">
            @csrf 
            <div class="mb-3">
                <label for="nom" class="form-label">Nombre:
                    <input type="text" id="nom" class="form-control" require>
                </label>
            </div>
            <div class="mb-3">
                <label for="descri" class="form-label">Descripcion:
                    <input type="text" id="descri" name="descri" class="form-control" require>
                </label>
            </div>
            <div class="mb-3">
                <label for="precio" class="form-label">Precio:
                    <input type="number" id="precio" name="precio" step="any" class="form-control">
                </label>
            </div>
                <input type="submit" class="btn btn-success btn-block" name="save" value="Guardar">
        </form>       
    </div>
</body>
</html>