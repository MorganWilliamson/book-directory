// Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

// Components
import Book from "./Books/Book.js";
import BookList from "./Books/BookList.js";

export default App = () => {
    const [bookList, setBookList] = useState([]); // Initial list is EMPTY

    useEffect(() => {
        const getBooks = () => {
            axios
            .get(`http://localhost:5000/api/books`)
            .then((res) => {
                setBookList(res.data);
            })
            .catch((err) => {
                console.error("Error retrieving books: ", err);
            });
        }

        getBooks();
    }, []);

    // functionality for saving books to SavedList

    return(
        <div className="app-wrapper">
            {/* SavedList goes outside of Switch */}
            <Switch>
                
                {/* Path for specific book by id */}
                <Route path="/books/:id">
                    <Book /> 
                    {/* addToSavedList */}
                </Route>

                {/* Default path, shows all books that can be retrieved */}
                <Route path="/">
                    <BookList books={bookList} />
                </Route>
                
            </Switch>
        </div>
    );
}
