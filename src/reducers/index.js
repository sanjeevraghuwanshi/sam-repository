import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import booksReducer from "./booksReducer";

const rootReducer = combineReducers({
    loginState: loginReducer,
    bookState: booksReducer
});

export default rootReducer;