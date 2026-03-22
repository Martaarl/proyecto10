import { Header } from "../components/header/header.js";
import { Login } from "../components/login/login.js";
import { Posts } from "../components/posts/posts.js";

const app = document.querySelector("#app");

let contentContainer;

export const renderApp =  async () => {
    app.innerHTML = "";

    const header = Header(showLogin);

    contentContainer = document.createElement("div");
    contentContainer.id = "content";
    
    app.append(header, contentContainer);

    renderPosts();
};

export const renderPosts = async () => {
    contentContainer.innerHTML = "";

    const posts = await Posts();
    contentContainer.appendChild(posts);
}

const showLogin = async () => {
    contentContainer.innerHTML = "";

    const login = await Login ();

    contentContainer.appendChild(login);
}

renderApp();