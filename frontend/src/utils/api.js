const URL =  "http://localhost:3000/";

export const API = async ({endpoint, method = "GET", body, isJson = false, token = null}) => {
    try {
        const headers = {Authorization: `Bearer ${token}`};
        //esto en verdad podría hacerse también con un if para token y otro para el isJson no?
        isJson ? (headers["Content-Type"]= "application/json") : "multipart/form-data";

        const res = await fetch(URL+endpoint, {
            body: isJson ? JSON.stringify(body) : body,
            method,
            headers
        })

        const response = await res.json();

        return response;

    } catch (error) {
        return error
    }
}