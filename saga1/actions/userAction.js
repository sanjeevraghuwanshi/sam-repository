import { SIGN_IN } from "../constants/actionTypes";


const doLogin = userData => ({
    type: SIGN_IN,
    userData
});

export {
    doLogin
}