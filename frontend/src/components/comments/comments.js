import { API } from "../../utils/api.js";
import { getComments } from "../../utils/comments.js";

export const Comments = async (postId) => {
    const container = document.createElement("div");
    container.className = "Comments-Container";

    const form = document.createElement("form");
    form.className = "Comment-Form";

    const input = document.createElement("input");
    input.placeholder= "Escribe un comentario...";
    input.className= "Comment-Input";

    const button = document.createElement("button");
    button.textContent = "Enviar";
    button.type = "Submit";

    form.append(input, button);

    const commentsContainer = document.createElement("div");
    
    container.appendChild(form, commentsContainer);

    const renderComments = async () => {
        commentsContainer.innerHTML = "<p>Cargando comentarios...</p>";

        const comments = await getComments(postId);

        commentsContainer.innerHTML = "";

        if (!comments || comments.length === 0) {
            commentsContainer.innerHTML = "<p>No hay comentarios</p>";
            return
        }

        comments.forEach(comment => {
            const p = document.createElement("p");
            p.textContent= comment.text;
            p.className = "pComments";

            container.appendChild(p);
        });
    };

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const text = input.value;

        await API ({
            endpoint: "comments",
            method: "POST",
            body: {
                post: postId,
                text
            }, 
            isJson: true,
            token: localStorage.getItem("token")
        });

        input.value = "";

        renderComments();

    });

    renderComments();

    return container;
}