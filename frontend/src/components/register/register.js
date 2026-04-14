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

        const userName = inputName.value;
        const email = inputEmail.value;
        const password = inputPassword.value;

        const res = await API({
            endpoint: "/users/register",
            method: "POST",
            body: {userName, email, password},
            isJson: true,
            });

            const data = await res.json();

            localStorage.setItem("token", data.token);
            goBack();
    });

    backButton.addEventListener("click", goBack);

    return sectionRegister;
}