import { takeEvery, all } from "@redux-saga/core/effects";
import { STORY_FETCH } from "../constants/actionTypes";
import { handleFetchStories } from "./story";

function* watchAll() {
    yield all([
        takeEvery(STORY_FETCH, handleFetchStories)
    ])
}

export default watchAll;