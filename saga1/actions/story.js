import {
    STORY_ADD,
    STORY_FETCH,
    STORIES_FETCH_ERROR
} from "../constants/actionTypes";

const doAddStories = stories => ({
    type: STORY_ADD,
    stories
});

const doFetchStories = query => ({
    type: STORY_FETCH,
    query
});

const doFetchErrorStories = query => ({
    type: STORIES_FETCH_ERROR,
    query
});

export {
    doAddStories,
    doFetchStories,
    doFetchErrorStories
}