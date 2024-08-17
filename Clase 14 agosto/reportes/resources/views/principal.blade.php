<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mostrar usuarios</title>
</head>
<body>
    <h1>Listado de Usuarios</h1>
    @foreach ($users as $user)
        <h2>{{$user->name}}</h2>
        <a href="{{route('users.pdf',$user)}}">Descargar PDF</a>
    @endforeach
</body>
</html>