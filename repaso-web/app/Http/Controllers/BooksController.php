<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BooksController extends Controller
{
    public function index()
    {
        $books=Book::all();
        return view('principal')->with('books',$books);
    }

    public function create()
    {
        return view('books');
    }

    public function store(Request $request)
    {
        $book = new Book();

        $book->title = $request->title_book;
        $book->author = $request->author_book;
        $book->category = $request->category_book;

        $book->save();
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        $book =Book::find($id);
        $book->delete();
        return redirect()->route('books.index');
    }
}
