import React from "react";

function BookInfo({book}){

    const bookImages = book.images
    let jacketCover = "Jacket Cover Coming Soon"

    if (bookImages){
        bookImages.forEach((image) => {
            const imageURI = image.uri
            if (imageURI.includes("jacket_cover")){
                jacketCover = <img src={imageURI} width={300} alt={book.name} />
            }
        })
    }


    return(
        <div className="border border-primary-subtle m-3 p-5">
            <h4>{book.name} by {book.author}</h4>
            {jacketCover}
        </div>
    )
}

export default BookInfo