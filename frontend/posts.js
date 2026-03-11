

console.log("Frontend conectado");

const container = document.getElementById("posts-container");

const getPost = async () => {
    try {
        const response = await fetch("http://localhost:3000/posts");
        const posts = await response.json();

        if (posts.length === 0) {
            container.innerHTML = "<p>No hay posts todavía</p>";
            return;
        }

        posts.array.forEach(post => {
            console.log(post);
        });
    } catch (error) {
        console.error("Error cargando posts:", error)
    }
}

getPost();