import { takeEvery, all } from "@redux-saga/core/effects";
import { SIGN_IN, } from "../constants/actionTypes";
import { userConstants } from "../constants/user.constants";
import { handleLogin } from "./loginSaga";
import { registerUser } from "./registerSaga";


function* watchAll() {
    yield all([
        takeEvery(SIGN_IN, handleLogin),
        takeEvery(userConstants.REGISTER_REQUEST, registerUser)
    ])
}

export default watchAll;
