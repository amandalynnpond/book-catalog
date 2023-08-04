import React from "react";
import BookInfo from "./BookInfo";
import data from "../data/data.json";


function BookList(){

    const books = data.products

    const bookList = books.map( book => <BookInfo key={book.sku} book={book} />)

    return(
        <div>
            {bookList}
        </div>
    )
}

export default BookList;