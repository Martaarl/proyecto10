import { Comments } from "../comments/comments.js";

export const Postdetail = async (post, goBack) => {
    const container = document.createElement("section");
    container.className = "Post-Detail";

    const backButton = document.createElement("button");
    backButton.textContent = "Volver";
    backButton.className = "ButtonBack";

    backButton.addEventListener("click", goBack);

    const title = document.createElement("h2");
    title.textContent = post.title;
    title.className = "Detail-Title";

    const img = document.createElement("img");
    img.src = post.image?.url;
    img.className = "Detail-Image";

    const description = document.createElement("p");
    description.textContent = post.description;
    description.className = "Detail-Description";

    const card = document.createElement("div");
    card.className = "Post-Card";

    const comments = await Comments(post._id);

    card.append(title, img, description);

    container.append(backButton, card, comments);

    return container;
}