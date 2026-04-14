const URL =  "http://localhost:3000";

export const API = async ({endpoint, method = "GET", body, isJson = false, token = null}) => {
    try {
        const headers = {};
        //esto en verdad podría hacerse también con un if para token y otro para el isJson no?
        if(isJson){
            headers["Content-Type"] = "application/json";
        }; 

        if (token) {
            headers["Authorization"]= `Bearer ${token}`;
        }

        console.log("URL:", URL + endpoint);
        console.log("URL:", URL + endpoint);

        const res = await fetch(URL+endpoint, {
            body: isJson ? JSON.stringify(body) : body,
            method,
            headers
        });

        const data = await res.json();

        return data;

    } catch (error) {
        console.error("API ERROR", error)
        return null
    }
}