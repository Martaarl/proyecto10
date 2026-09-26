import { renderApp } from "../../main/main.js";
import { API } from "../../utils/api.js";

export const Register = (goBack) => {
    const sectionRegister = document.createElement("section");
    sectionRegister.className= "Section-Register";

    const form = document.createElement("form");
    form.className= "Register-Form";

    const errorMessage = document.createElement("p");
    errorMessage.className = "Error-Text";

    const inputName = document.createElement("input");
    inputName.className = "Input-Name";
    inputName.placeholder = "Nombre";

    const inputEmail = document.createElement("input");
    inputEmail.className = "Input-Email";
    inputEmail.placeholder = "Email";

    const inputPassword = document.createElement("input");
    inputPassword.className ="Input-Password";
    inputPassword.type= "password";
    inputPassword.placeholder = "Contraseña";

    const togglePassword = document.createElement("button");
    togglePassword.type="button";
    togglePassword.textContent= "Mostrar";
    togglePassword.className= "Toggle-Password";

    togglePassword.addEventListener("click", () => {
        if (inputPassword.type === "password") {
            inputPassword.type= "text";
            togglePassword.textContent = "Ocultar";
        } else{
            inputPassword.type = "password";
            togglePassword.textContent = "Mostrar";
        } 
    })

    const buttonRegister = document.createElement("button");
    buttonRegister.type = "submit";
    buttonRegister.textContent = "Registrarse";
    buttonRegister.className = "Button-Submit";

    const backButton = document.createElement("button");
    backButton.textContent = "Vuelve atrás 🔙";
    backButton.className= "Button-Back";
    backButton.type= "button";

    form.append(errorMessage, inputName, inputEmail, inputPassword, togglePassword, buttonRegister);
    form.prepend(backButton);
    sectionRegister.appendChild(form);

    form.addEventListener("submit", async(e) => {
        e.preventDefault();

        errorMessage.textContent = "";

        const name = inputName.value;
        const email = inputEmail.value;
        const password = inputPassword.value;

        if (!name || !email || !password) {
            errorMessage.textContent = "Todos los campos son obligatorios";
            return
        }

        if (!email.includes("@")|| !email.includes(".")) {
            errorMessage.textContent = "Introduce un email válido";
            return
        }
    
    try {
        const data = await API({
            endpoint: "/users/register",
            method: "POST",
            body: {name, email, password},
            isJson: true,
            });

            if (!data || !data.token) {
                errorMessage.textContent = "No se pudo completar el registro";
                return;
            }

            localStorage.setItem("token", data.token);
            alert("✅ Te has registrado correctamente");
            
            renderApp();
            
     } catch (error) {
        console.error("Error en el register:", error);
        errorMessage.textContent = "Error al registrarse, inténtelo de nuevo";
     }
    });

    backButton.addEventListener("click", goBack);

    return sectionRegister;
};