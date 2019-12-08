import {
    GET_BOOKS_REQUEST,
    BOOKS_LOADED_SUCCESFULLY,
    GET_BOOK_REQUEST,
    BOOK_FETCHED_SUCCESFULLY
} from "../constants/booksConstants";

export const getBooks = () => ({
    type: GET_BOOKS_REQUEST
});
export const getBook = id => ({
    type: GET_BOOK_REQUEST,
    id
});
export const booksLoaded = books => ({
    type: BOOKS_LOADED_SUCCESFULLY,
    books
});
export const bookFetched = book => ({
    type: BOOK_FETCHED_SUCCESFULLY,
    book
});

