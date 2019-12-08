
const isUserExists = (state) => {
    console.log("selectors", state);
    if (!!state.loginState.isAuthorise) {
        return true
    }
}

const getFetchError = ({ storyState }) => {
    return (
        storyState.error
    );
}

export { isUserExists, getFetchError }