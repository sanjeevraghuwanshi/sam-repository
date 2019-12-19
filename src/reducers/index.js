import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import booksReducer from "./booksReducer";
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
    loginState: loginReducer,
    bookState: booksReducer,
    form: reduxFormReducer,
});

export default rootReducer;