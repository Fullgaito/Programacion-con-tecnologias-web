<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Repaso Web</title>
</head>
<body>
    <form action="{{route('books.store')}}" method="post">
        @csrf

        <label for="1">Ingrese el titulo del libro</label>
        <input type="text" name="title_book" placeholder="Title" id="1">

        <label for="2">Igrese el autor del libro</label>
        <input type="text" name="author_book" placeholder="Author" id="2">

        <label for="3">Ingrese la categoria del libro</label>
        <input type="text" name="category_book" placeholder="Category" id="3">

        <button type="submit">Crear</button>
    </form>



    <script src="{{asset('js/script.js')}}"></script>
</body>
</html>
