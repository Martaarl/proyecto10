import { Header } from "../components/header/header.js";
import { Login } from "../components/login/login.js";
import { Postdetail } from "../components/postDetail/postDetail.js";
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
    contentContainer.innerHTML = "<p>Cargando posts...</p>";

    const posts = await Posts(search, showPostDetail);

    if (!posts) {
        contentContainer.innerHTML = `<p class = "Error-Message"> Error cargando los posts </p>`
    }

    contentContainer.innerHTML="";
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

const showPostDetail = (post) =>{
    contentContainer.innerHTML = "";

    const detail = Postdetail(post, goHome);

    contentContainer.appendChild(detail);
}

renderApp();