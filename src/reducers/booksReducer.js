import {
    BOOKS_LOADED_SUCCESFULLY,
    BOOK_FETCHED_SUCCESFULLY
} from "../constants/booksConstants";

const initialState = {

};

export default (state = initialState, { type, books, book }) => {
    switch (type) {

        case BOOKS_LOADED_SUCCESFULLY:
            return { ...state, books }
        case BOOK_FETCHED_SUCCESFULLY:
            return { ...state, book }

        default:
            return state
    }
}
