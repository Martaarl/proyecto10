import { Header } from "../components/header/header.js";
import { Posts } from "../components/posts/posts.js";

const app = document.querySelector("#app");

export const renderApp =  async () => {
    app.innerHTML = "";

    const header = Header();
    const posts = await Posts();

    app.append(header, posts);
};

renderApp();