
import axios from "axios";

const HN_BASE_URL = 'http://localhost:8000/users';

// http://localhost:8000/stories?q=

export const isAuthorised = query => {
    return axios.get(`${HN_BASE_URL}`)
        .then(response => {
            console.log('response', response);
            // doAddStories(response.data.hits)
            return response.data
        })
        .catch(error => console.log("error", error))
}
