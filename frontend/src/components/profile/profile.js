import { isLogged } from "../../../../src/utils/logged.js";
import { API } from "../../utils/api.js";

export const Profile = async () => {
    const container = document.createElement("section");
    container.className = "Section-Profile";

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
    title.textContent = "💚Aquí están tus posts favoritos";

    container.appendChild(title);

    const postsContainer = document.createElement("div");

    if (!user.likedPosts || user.likedPosts.length === 0) {
        postsContainer.innerHTML = "<p>No tienes favoritos</p>";
        container.appendChild(postsContainer);
        return container;
    }

    user.likedPosts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className="Fav-Post";

        const title = document.createElement("h3");
        title.textContent= post.title;
        title.className = "Post-Title";

        const img = document.createElement("img");
        img.src = post.image?.url;
        img.className = "Post-Image";
        
        postDiv.append(title, img);
        postsContainer.appendChild(postDiv);
    });

    container.appendChild(postsContainer);

    return container;
}