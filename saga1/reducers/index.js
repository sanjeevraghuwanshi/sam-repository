import { combineReducers } from "redux";
import storyReduer from "./story";
import archiveRedcer from "./archive";

const rootReducer = combineReducers({
    storyState: storyReduer,
    archiveState: archiveRedcer
});

export default rootReducer;