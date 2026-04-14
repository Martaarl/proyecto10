import { API } from "./api.js";

export const getComments = async (postId) => {
    try {
    const comments = await API ({
        endpoint: `/comments/post/${postId}`
    });

    return comments;
    } catch (error) {
        console.error("Error al obtener los comentarios:", error);
        return [];
    }
}