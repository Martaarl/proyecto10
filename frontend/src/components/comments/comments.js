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
    button.textContent = "📤";
    button.type = "Submit";

    form.append(input, button);

    const commentsContainer = document.createElement("div");
    
    const token = localStorage.getItem("token");

    if (token) {
        container.append(form, commentsContainer);
    } else {
        const message = document.createElement("p");
        message.textContent = "Inicia sesión para comentar 👤";
        message.className = "Comment-Message";

        container.append(message, commentsContainer);
    }


    const renderComments = async () => {
        commentsContainer.innerHTML = "<p>Cargando comentarios...</p>";

        const comments = await getComments(postId);

        commentsContainer.innerHTML = "";

        if (!comments || comments.length === 0) {
            commentsContainer.innerHTML = "<p>No hay comentarios</p>";
            return
        };

        comments.forEach(comment => {
            const commentDiv = document.createElement("div");
            commentDiv.className="Comment-Div";

            const commentUser = document.createElement("p");
            commentUser.className = "Comment-User";
            commentUser.textContent = comment.user?.name || "Usario";

            const commentText = document.createElement("p");
            commentText.textContent= comment.text;
            commentText.className = "Comment-Text";

            commentDiv.append(commentUser, commentText);

            commentsContainer.appendChild(commentDiv);
        });
    };

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const text = input.value;

        await API ({
            endpoint: "/comments",
            method: "POST",
            body: {
                postId,
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