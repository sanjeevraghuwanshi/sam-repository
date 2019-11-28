import { call, put } from "@redux-saga/core/effects"
import { isAuthorised } from "../api/loginApi";
import { doLogin } from "../actions/userAction";
import { fetchStories } from "../api/story";

function* handleLogin({ userData }) {
    try {
        const result = yield call(isAuthorised, userData);
        // yield put(doLogin(result))
    } catch (error) {
        yield put(error)
    }
}

export { handleLogin };