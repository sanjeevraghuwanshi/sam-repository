import { STORY_ARCHIVE } from "../constants/actionTypes";

const initialState = [];

const applyArchiveStory = (state, id) => {
    return [...state, id]
}
const archiveRedcer = (state = initialState, { type, id }) => {
    switch (type) {
        case STORY_ARCHIVE: {
            return applyArchiveStory(state, id)
        }
        default:
            return state
    }
}

export default archiveRedcer;