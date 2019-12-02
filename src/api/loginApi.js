import httpService from "../services/globalService";

export const isAuthorised = ({ email }) => {
    return httpService.get(`/users?q=${email}`)
        .then(response => response.data)
        .catch(error => console.log("error", error))
}

export const addUser = (user) => {
    return httpService.post(`/users`, user)
        .then(response => response.status)
        .catch(error => console.log("error", error))
}