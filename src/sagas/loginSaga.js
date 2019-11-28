import { call, put } from "@redux-saga/core/effects"
import { isAuthorised } from "../api/loginApi";
import { doAddUserData } from "../actions/userAction";
function* handleLogin({ userData }) {
    try {
        const result = yield call(isAuthorised, userData);
        yield put(doAddUserData(result))
    } catch (error) {
        yield put(error)
    }
}

export { handleLogin };