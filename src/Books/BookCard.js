import React from "React";

export default BookCard = (props) => {
    const {book_name, author, onClick} = props;

    return (
        <div className="book-card" onClick={onClick}>
            <h2>{book_name}</h2>
            <div className="book-author">
                Author: <p>{author}</p>
            </div>
        </div>
    );
}
