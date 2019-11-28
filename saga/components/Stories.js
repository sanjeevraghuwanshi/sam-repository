import React from 'react';
import { connect } from "react-redux";
import Story from "./Story";

import './Stories.css';
import StoryHeader from "./StoryHeader";
import { getReadableStories, getFetchError } from '../selectors/story';

const COLUMNS = {
    title: {
        width: '40%',
        label: 'Title'
    },
    author: {
        width: '30%',
        label: 'Author'
    },
    comments: {
        width: '10%',
        label: 'Commnets'
    },
    points: {
        width: '10%',
        label: 'Points'
    },
    archive: {
        width: '10%',
    }
};

const Stories = (props) => {
    const { stories, error } = props;
    return (
        <div className="stories">
            <StoryHeader columns={COLUMNS} />
            {error && <p className="error">Something went wrong</p>}
            {stories.map(story => (
                <Story
                    key={story.objectID}
                    story={story}
                    columns={COLUMNS}
                />
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    stories: getReadableStories(state),
    error: getFetchError(state)
});



export default connect(mapStateToProps)(Stories);