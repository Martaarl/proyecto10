import { Header } from "../components/header/header.js";
import { Login } from "../components/login/login.js";
import { Posts } from "../components/posts/posts.js";

const app = document.querySelector("#app");

let postsContainer;

export const renderApp =  async () => {
    app.innerHTML = "";

    const header = Header(showLogin);

    postsContainer = document.createElement("div");
    postsContainer.id = "posts-root";
    
    app.append(header, postsContainer);

    renderPosts();
};

export const renderPosts = async () => {
    postsContainer.innerHTML = "";

    const posts = await Posts();
    postsContainer.appendChild(posts);
}

const showLogin = () => {
    app.innerHTML = "";

    const login = Login ();

    app.appendChild(login);
}

renderApp();