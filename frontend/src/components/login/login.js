

export const Login = async () => {

    const sectionLogin = document.createElement("section");
    sectionLogin.className = "Section-Login";

    const loginForm = document.createElement("form");
    loginForm.className = "Login-Form";

    loginForm.addEventListener("submit", (e) =>{
        e.preventDefault();
        console.log("form enviado");
    })

    const inputName = document.createElement("input");
    inputName.className= "Input-Name";

    const inputEmail = document.createElement("input");
    inputEmail.className= "Input-Email";

    const inputPassword = document.createElement("input");
    inputPassword.className = "Input-Password";

    const buttonSubmit = document.createElement("button");
    buttonSubmit.type="submit";
    buttonSubmit.className = "Button-Submit";

    loginForm.append(inputName, inputEmail, inputPassword, buttonSubmit);

    sectionLogin.appendChild(loginForm);

    return sectionLogin;
}