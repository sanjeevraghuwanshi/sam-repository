import { userConstants } from "../constants/user.constants";
import { SIGN_IN } from "../constants/actionTypes";

let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : {};

export default (state = initialState, { type, userFetchedData, userData }) => {
    switch (type) {
        case SIGN_IN:
            return { ...state, userData }
        case userConstants.LOGIN_SUCCESS:
            return { ...state, userFetchedData }
        default:
            return state
    }
}
