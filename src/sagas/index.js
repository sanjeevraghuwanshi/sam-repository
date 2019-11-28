import { takeEvery, all } from "@redux-saga/core/effects";
import { SIGN_IN } from "../constants/actionTypes";
import { handleLogin } from "./loginSaga";


function* watchAll() {
    yield all([
        takeEvery(SIGN_IN, handleLogin)
    ])
}

export default watchAll;
