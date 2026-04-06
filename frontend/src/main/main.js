import { Header } from "../components/header/header.js";
import { Login } from "../components/login/login.js";
import { Posts } from "../components/posts/posts.js";
import { Register } from "../components/register/register.js";

const app = document.querySelector("#app");

let contentContainer;
let allPost = [];

export const renderApp =  async () => {
    app.innerHTML = "";

    const header = Header(showLogin,renderPosts);

    contentContainer = document.createElement("div");
    contentContainer.id = "content";
    
    app.append(header, contentContainer);

    renderPosts();
};

export const renderPosts = async (search = "") => {
    contentContainer.innerHTML = "";

    const posts = await Posts(search);
    
    contentContainer.appendChild(posts);
}

const showLogin = async () => {
    contentContainer.innerHTML = "";

    const login = await Login (showRegister, goHome);

    contentContainer.appendChild(login);
}

const showRegister = async () => {
    contentContainer.innerHTML= "";

    const register = Register(goHome);

    contentContainer.appendChild(register);
}

const goHome = () => {
    renderPosts();
}

renderApp();