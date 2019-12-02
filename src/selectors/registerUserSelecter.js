
const isUserRegistered = state => {
    if (state.loginState.userRegisterSuccess === 201) {
        return true
    } else {
        return false;
    }
}

const getFetchError = ({ storyState }) => {
    return (
        storyState.error
    );
}

export { isUserRegistered, getFetchError }