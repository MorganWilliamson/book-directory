import React from "react";
import { useHistory } from "react-router-dom";
import BookCard from "./BookCard.js";

export default BookList = (props) => {
    return (
        <div className="book-list">
            {props.books.map(book => {
                <BookDetails key={book.id} book={book} />
            })}
        </div>
    );
}

function BookDetails(props) {
    const history = useHistory();
    const routeDescription = () => {
        history.push(`/books/${props.book.id}`);
    };

    return <BookCard {...props.book} onClick={routeDescription} />;
}
