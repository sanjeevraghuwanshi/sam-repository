import { SIGN_IN } from "../constants/actionTypes";
import { userConstants } from "../constants/user.constants";


const doLogin = userData => ({
    type: SIGN_IN,
    userData
});

const doAddUserData = userFetchedData => ({
    type: userConstants.LOGIN_SUCCESS,
    userFetchedData
});

const doRegister = userRegister => ({
    type: userConstants.REGISTER_REQUEST,
    userRegister
});

const doRegisterUserSuccess = userRegisterSuccess => ({
    type: userConstants.REGISTER_SUCCESS,
    userRegisterSuccess
});


export {
    doLogin,
    doAddUserData,
    doRegister,
    doRegisterUserSuccess
}