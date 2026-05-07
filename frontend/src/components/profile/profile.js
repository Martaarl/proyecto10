import { isLogged } from "/frontend/src/utils/logged.js";
import { API } from "../../utils/api.js";

export const Profile = async (goHome) => {
    const container = document.createElement("section");
    container.className = "Profile-Container";

    const backButton = document.createElement("button");
    backButton.textContent = "← Volver";
    backButton.className = "Button-Back";

    backButton.addEventListener("click", () => {
        goHome();
    });

    if (!isLogged()) {
        container.innerHTML = "<p>Debes iniciar sesión</p>";
        return container;
    }

    const user = await API({
        endpoint: "/users/me",
        token: localStorage.getItem("token")
    });

    const title = document.createElement("h2");
    title.className = "Title-Favourites";
    title.textContent = "💚 Aquí están tus posts favoritos";

    const postsContainer = document.createElement("div");
    postsContainer.className = "Fav-Container";

    if (!user.likedPosts || user.likedPosts.length === 0) {
        postsContainer.innerHTML = "<p class='NoFavs'>No tienes favoritos</p>";
        container.append(title, postsContainer);
        return container;
    }

    user.likedPosts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className="Fav-Post";

        const img = document.createElement("img");
        img.src = post.image?.url;
        img.className = "Post-Image";

        const titlePost = document.createElement("h3");
        titlePost.textContent= post.title;
        titlePost.className = "Title-Post";

        postDiv.append(img, titlePost);
        postsContainer.appendChild(postDiv);
    });

    container.append(backButton, title, postsContainer);

    return container;
}