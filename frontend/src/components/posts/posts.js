import { API } from "../../utils/api.js";

export const Posts = async (search = "", onPostClick) => {
    const container = document.createElement("section");
    container.id= "posts-container";

    const posts = await API({endpoint: "/posts"});
    if (!posts) return null;

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

        const likeButton = document.createElement("button");
        likeButton.className = "Like-Button";
        likeButton.textContent = "🤍";

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

        likeButton.addEventListener("click", async () =>{
          const token = localStorage.getItem("token");

          if (!token) {
            alert("Inicia sesión para guardar posts");
            return;
          }

          await API({
            endpoint: `/users/likedPost/${post._id}`,
            method: "PUT", 
            token
          });

          likeButton.textContent = likeButton.textContent === "🤍" ? "❤️" : "🤍";
        });

        container.appendChild(articlePost);
        });

    return container
}
