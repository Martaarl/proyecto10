// estructura básica y diseño temporal: luego quiero añadir que la description solo se vea al clicar
export const Posts = async () => {
    const container = document.createElement("section");
    container.id= "posts-container";

    try {
        const res = await fetch("http://localhost:3000/posts");
        const posts = await res.json();

        if (posts.length === 0) {
            container.innerHTML = "<p>No hay posts todavía</p>";
            return;
        }

        container.innerHTML = "";

        posts.forEach(post => {
            const articlePost = document.createElement("article");
            articlePost.className="Card-Post"

            const titlePost = document.createElement("h2");
            titlePost.className = "Title-Post";
            titlePost.textContent = post.title;
            
            const imgPost = document.createElement("img");
            imgPost.src = post.image?.url;
            imgPost.alt = post.title;
            imgPost.className= "Image-Post";

            const descriptionPost = document.createElement("p");
            descriptionPost.textContent = post.description;
            descriptionPost.className ="Description-Post";

            articlePost.append(titlePost, imgPost, descriptionPost);

            container.appendChild(articlePost);
        });

    } catch (error) {
        console.error("Error cargando posts:", error)
    }

    return container
}
