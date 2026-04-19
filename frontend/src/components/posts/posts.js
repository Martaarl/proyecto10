import { isLogged } from "../../../../src/utils/logged.js";
import { API } from "../../utils/api.js";

export const Posts = async (search = "", onPostClick) => {
    const container = document.createElement("section");
    container.id= "posts-container";

    const posts = await API({endpoint: "/posts"});
    if (!posts) return null;

    let likedPosts = [];

    if (isLogged()) {
      likedPosts = await API ({
        endpoint: "/users/me/likedPosts",
        token: localStorage.getItem("token")
      });
    };

    const filteredPosts = posts.filter(post=>{
       return post.title.toLowerCase().includes((search || "").toLowerCase());
    });

    container.innerHTML = "";

     filteredPosts.forEach(post => {
        const articlePost = document.createElement("article");
        articlePost.className="Card-Post";

        const titlePost = document.createElement("h2");
        titlePost.className = "Title-Post";
        titlePost.textContent = post.title;
            
        const imgPost = document.createElement("img");
        imgPost.src = post.image?.url;
        imgPost.alt = post.title;
        imgPost.className= "Image-Post";

        const isLiked = likedPosts.includes(post._id);

        const likeButton = document.createElement("button");
        likeButton.className = "Like-Button";
        likeButton.textContent = isLiked ? "❤️" : "🤍";

        const descriptionPost = document.createElement("p");
        descriptionPost.textContent = post.description;
        descriptionPost.className ="Description-Post";

        const content = document.createElement("div");
        content.className= "Card-Content";

        content.append(titlePost, descriptionPost);

        articlePost.append(imgPost, likeButton, content);

        articlePost.addEventListener("click", () => {
        console.log("Click en post");
          onPostClick(post);
        });

        likeButton.addEventListener("click", async (e) =>{
          e.stopPropagation();
          
          if (!isLogged) {
            alert("Inicia sesión para guardar posts");
            return;
          };

          const token = localStorage.getItem("token");

          const res = await API({
            endpoint: `/users/likedPosts/${post._id}`,
            method: "PUT", 
            token
          });

          const isNowLiked = res.liked;

          likeButton.textContent = isNowLiked ? "❤️" : "🤍";
        });

        container.appendChild(articlePost);
        });

    return container
}
