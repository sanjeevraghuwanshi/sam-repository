import httpService from "../services/globalService";

export const fetchSingleBook = (id) => {
    return httpService.get(`/books?q=${id}`)
        .then(response => response.data[0])
        .catch(error => console.log("error", error));
}

export const fetchBooks = () => {
    return httpService.get(`/books`)
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => console.log("error", error))
}
