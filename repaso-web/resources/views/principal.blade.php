<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body >
    <table>
        <thead>
            <tr>
                <th>Nombre del libro</th>
                <th>Autor</th>
                <th>Categoria</th>
            </tr>
        </thead>
        <tbody>
            @foreach {$books as $book}
                <tr>
                    <td>{{$book->title}}</td>
                    <td>{{$book->author}}</td>
                    <td>{{$book->category}}</td>
                    
                </tr>
            @endforeach
        </tbody>
            
    </table>
</body>
</html>