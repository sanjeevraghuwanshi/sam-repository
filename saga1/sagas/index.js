import { takeEvery, all } from "@redux-saga/core/effects";
import { STORY_FETCH, SIGN_IN } from "../constants/actionTypes";
import { handleFetchStories } from "./story";
import { handleLogin } from "./loginSaga";

function* watchAll() {
    yield all([
        takeEvery(STORY_FETCH, handleFetchStories),
        takeEvery("ABC", handleLogin)
    ])
}

export default watchAll;