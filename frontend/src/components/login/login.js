

export const Login = async () => {

    const sectionLogin = document.createElement("section");
    sectionLogin.className = "Section-Login";

    const loginForm = document.createElement("form");
    loginForm.className = "Login-Form";

    const inputName = document.createElement("input");
    inputName.className= "Input-Name";

    const inputEmail = document.createElement("input");
    inputEmail.className= "Input-Email";

    const inputPassword = document.createElement("input");
    inputPassword.className = "Input-Password";

    const buttonLogin = document.createElement("button");
    buttonLogin.className = "Button-Login"

    loginForm.append(inputName, inputEmail, inputPassword, buttonLogin);

    sectionLogin.appendChild(loginForm);

    return sectionLogin;
}