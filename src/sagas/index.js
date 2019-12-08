import { takeEvery, all } from "@redux-saga/core/effects";
import { SIGN_IN, } from "../constants/actionTypes";
import { userConstants } from "../constants/user.constants";
import { handleLogin } from "./loginSaga";
import { registerUser } from "./registerSaga";
import { getAllBooks, getSingleBook } from "./booksSaga";
import { GET_BOOKS_REQUEST, GET_BOOK_REQUEST } from "../constants/booksConstants";
// const GET_BOOKS_REQUEST = GET_BOOKS_REQUEST;
function* watchAll() {
    yield all([
        takeEvery(SIGN_IN, handleLogin),
        takeEvery(userConstants.REGISTER_REQUEST, registerUser),
        takeEvery(GET_BOOKS_REQUEST, getAllBooks),
        takeEvery(GET_BOOK_REQUEST, getSingleBook)
    ])
}

export default watchAll;
