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

export {
    doLogin,
    doAddUserData
}