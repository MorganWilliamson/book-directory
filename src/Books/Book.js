import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard.js";

export default Book = (props) => {
    const [book, setBook] = useState();

    let { id } = useParams();

    if (!book) {
        return <div>Loading book information. . .</div>;
    }

    useEffect(() => {
        axios  
            .get(`http://localhost:5000/api/books/${id}`) // Grab by id
            .then((res) => {
                setBook(res.data); // Set book to response data
            })
            .catch((err) => {
                console.error(err); // Log error
            });
    }, [id]); // Don't forget dependency array! :) 

    return (
        <div className="book-wrapper">
            <BookCard {...book} />
            {/* add save button here */}
        </div>
    );
};
