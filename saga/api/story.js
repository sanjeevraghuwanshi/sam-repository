import axios from "axios";

const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query=';

export const fetchStories = query => {
    return axios.get(`${HN_BASE_URL} ${query}`)
        .then(response => {
            console.log('response', response);
            // doAddStories(response.data.hits)
            return response.data
        })
        .catch(error => console.log("error", error))
}
