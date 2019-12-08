import { call, put } from "@redux-saga/core/effects"
import { isAuthorised } from "../api/loginApi";
import { doAddUserData } from "../actions/userAction";
import history from '../utils/history';

function* handleLogin({ userData }) {
    let result;
    try {
        result = yield call(isAuthorised, userData);
    } catch (error) {
        yield put(error)
    }


    yield put(doAddUserData(result))
    history.push('/app');
}

export { handleLogin };