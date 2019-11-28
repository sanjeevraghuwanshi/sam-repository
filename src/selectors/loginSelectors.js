
const isUserExists = (state) => {
    console.log("selectors", state);
    if (!!state.loginState.userData && !!state.loginState.userFetchedData) {
        return state.loginState.userData.email === state.loginState.userFetchedData[0].email
    }
}

const getFetchError = ({ storyState }) => {
    return (
        storyState.error
    );
}

export { isUserExists, getFetchError }