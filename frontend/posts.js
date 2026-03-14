

console.log("Frontend conectado");

const container = document.getElementById("posts-container");

const getPost = async () => {
    try {
        const res = await fetch("http://localhost:3000/posts");
        const posts = await res.json();

        if (posts.length === 0) {
            container.innerHTML = "<p>No hay posts todavía</p>";
            return;
        }

        posts.forEach(post => {
            console.log(post);
        });

    } catch (error) {
        console.error("Error cargando posts:", error)
    }
}

getPost();