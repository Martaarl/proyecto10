import { renderApp } from "../../main/main.js";
import { API } from "../../utils/api.js";

export const Register = (goBack) => {
    const sectionRegister = document.createElement("section");
    sectionRegister.className= "Section-Register";

    const form = document.createElement("form");
    form.className= "Register-Form";

    const inputName = document.createElement("input");
    inputName.className = "Input-Name";
    inputName.placeholder = "Nombre";

    const inputEmail = document.createElement("input");
    inputEmail.className = "Input-Email";
    inputEmail.placeholder = "Email";

    const inputPassword = document.createElement("input");
    inputPassword.className ="Input-Password";
    inputPassword.placeholder = "Contraseña";

    const buttonRegister = document.createElement("button");
    buttonRegister.type = "submit";
    buttonRegister.textContent = "Registrarse";
    buttonRegister.className = "Button-Submit";

    const backButton = document.createElement("button");
    backButton.textContent = "Vuelve atrás 🔙";
    backButton.className= "Button-Back";
    backButton.type= "button";

    form.append(inputName, inputEmail, inputPassword, buttonRegister);
    form.prepend(backButton);
    sectionRegister.appendChild(form);

    form.addEventListener("submit", async(e) => {
        e.preventDefault();

        const name = inputName.value;
        const email = inputEmail.value;
        const password = inputPassword.value;
    
    try {
        const data = await API({
            endpoint: "/users/register",
            method: "POST",
            body: {name, email, password},
            isJson: true,
            });

            localStorage.setItem("token", data.token);
            alert("✅ Te has registrado correctamente");
            
            renderApp();
            
     } catch (error) {
        console.error("Error en el register:", error);
        alert("Error al registrarse");
     }
    });

    backButton.addEventListener("click", goBack);

    return sectionRegister;
};