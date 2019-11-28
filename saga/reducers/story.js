import { STORY_ADD, STORIES_FETCH_ERROR } from "../constants/actionTypes";

const initialState = {
    stories: [],
    error: null
};
const applyAddStories = (stories) => ({ stories, error: null });
const applyAFetchErrorStories = (error) => ({ stories: [], error });

const storyReduer = (state = initialState, { type, stories, error }) => {
    switch (type) {
        case STORY_ADD:
            return applyAddStories(stories)
        case STORIES_FETCH_ERROR:
            return applyAFetchErrorStories(error)
        default:
            return state
    }
}

export default storyReduer;
