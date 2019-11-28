const isNotArchived = archivedIds => story => archivedIds.indexOf(story.objectID) === -1;

const getReadableStories = ({ storyState, archiveState }) => {
    return (
        storyState.stories.filter(isNotArchived(archiveState))
    );
}

const getFetchError = ({ storyState }) => {
    return (
        storyState.error
    );
}

export { getReadableStories, getFetchError }