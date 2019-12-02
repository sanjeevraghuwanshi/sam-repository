import { call, put } from "@redux-saga/core/effects"
import { addUser } from "../api/loginApi";
import { doRegisterUserSuccess } from "../actions/userAction";
import history from '../history';


function* registerUser({ userRegister }) {
    let result;
    try {
        result = yield call(addUser, userRegister);

    } catch (error) {
        yield put(error)
    }

    yield put(doRegisterUserSuccess(result))
    history.push('/auth/login');
}

export { registerUser };