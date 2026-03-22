export const Register = () => {
    const sectionRegister = document.createElement("section");
    sectionRegister.className= "Section-Register";

    const form = document.createElement("form");

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

    form.append(inputName, inputEmail, inputPassword, buttonRegister);
    sectionRegister.appendChild(form);

    form.addEventListener("submit", async(e) => {
        e.preventDefault();

        const userName = inputName.value;
        const email = inputEmail.value;
        const password = inputPassword.value;

        try {
            console.log({
  userName,
  email,
  password,
  checkUserName: !!userName,
  checkEmail: !!email,
  checkPassword: !!password
});
            const res = await fetch("http://localhost:3000/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({userName, email, password})
            });

            const data = await res.json();

            localStorage.setItem("token", data.token);
            console.log("REGISTER:", data)
        } catch (error) {
            console.error("Error register", error)
        }
        console.log(email);
    })

    return sectionRegister;
}