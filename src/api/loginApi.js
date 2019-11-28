import httpService from "../services/globalService";

export const isAuthorised = ({ email }) => {
    return httpService.get(`/users?q=${email}`)
        .then(response => response.data)
        .catch(error => console.log("error", error))
}