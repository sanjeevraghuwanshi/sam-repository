import { call, put } from "@redux-saga/core/effects"
import {
    fetchBooks,
    fetchSingleBook
} from "../api/bookApi";
import {
    booksLoaded,
    bookFetched
} from "../actions/booksAction";

function* getAllBooks() {
    let result;
    try {
        result = yield call(fetchBooks)
        yield put(booksLoaded(result))
        // console.log("result", result)
    } catch (error) {
        yield put(error)
    }
}

function* getSingleBook({ id }) {
    let result;
    try {
        result = yield call(fetchSingleBook, id)
        yield put(bookFetched(result))
        // console.log("result", result)
    } catch (error) {
        yield put(error)
    }
}
export { getAllBooks, getSingleBook };
