import { API } from "../../utils/api.js";

export const Login = async (goToRegister, goBack) => {

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
    buttonSubmit.textContent = "Inicia sesión";

    const goRegister = document.createElement("p");
    goRegister.className = "Anchor-Submit";
    goRegister.textContent = "¿No tienes cuenta? Regístrate";

    const backButton = document.createElement("button");
    backButton.textContent = "Inicio";
    backButton.className= "Button-Back";
    backButton.type= "button";

    loginForm.append(inputName, inputEmail, inputPassword, buttonSubmit, goRegister);
    loginForm.prepend(backButton);
    sectionLogin.appendChild(loginForm);
    
    loginForm.addEventListener("submit", async (e) =>{
        e.preventDefault();

        const name = inputName.value;
        const email = inputEmail.value;
        const password = inputPassword.value;

        const data = await API( {
            endpoint: "/users/login",    
            method: "POST",
            body:{name, email, password},
            isJson: true
            });
            
        if (!data || !data.token) {
            console.error("Login fallido");
            return;
        }
        localStorage.setItem("token", data.token);

        alert("Sesión iniciada correctamente✅");
        goBack();
    });

    goRegister.addEventListener("click", goToRegister);

    backButton.addEventListener("click", () => {
        console.log("click back"), 
        goBack()});

    return sectionLogin;
}