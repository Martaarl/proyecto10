

export const Login = async (goToRegister) => {

    const sectionLogin = document.createElement("section");
    sectionLogin.className = "Section-Login";

    const loginForm = document.createElement("form");
    loginForm.className = "Login-Form";

    const inputName = document.createElement("input");
    inputName.className= "Input-Name";
    inputName.placeholder = "Introduzca su nombre"
    
    const inputEmail = document.createElement("input");
    inputEmail.className= "Input-Email";
    inputEmail.placeholder = "Introduzca su email";

    const inputPassword = document.createElement("input");
    inputPassword.className = "Input-Password";
    inputPassword.placeholder = "Introduzca su contraseña";
    
    const buttonSubmit = document.createElement("button");
    buttonSubmit.type="submit";
    buttonSubmit.className = "Button-Submit";

    const goRegister = document.createElement("p");
    goRegister.textContent = "¿No tienes cuenta? Regístrate";

    loginForm.append(inputName, inputEmail, inputPassword, buttonSubmit, goRegister);

    loginForm.addEventListener("submit", async (e) =>{
        e.preventDefault();

        const name = inputName.value;
        const email = inputEmail.value;
        const password = inputPassword.value;

        try {
            const res = await fetch("http://localhost:3000/users/login", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({name,email, password})
            })
        const data = await res.json();

        localStorage.setItem("token", data.token)

        } catch (error) {
            console.error("Error en el login:", error)
        }
    })

    goRegister.addEventListener("click", goToRegister);

    sectionLogin.appendChild(loginForm);

    return sectionLogin;
}