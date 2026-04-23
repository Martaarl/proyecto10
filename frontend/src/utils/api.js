const URL =  "http://localhost:3000";

export const API = async ({endpoint, method = "GET", body, isJson = false, token = null}) => {
    try {
        const headers = {};
       
        if(isJson){
            headers["Content-Type"] = "application/json";
        }; 

        if (token) {
            headers["Authorization"]= `Bearer ${token}`;
        };

        const res = await fetch(URL+endpoint, {
            method,
            headers,
            body: isJson ? JSON.stringify(body) : body
        });

        const data = await res.json();
        if (!res.ok) {
            console.error("API ERROR: ", data);
            return {error: data.error || "Error desconocido"}
        }

        return data;

    } catch (error) {
        console.error("API ERROR", error);
        return null
    }
}