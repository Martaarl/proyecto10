export const Header = (loginClick) => {
    const header = document.createElement("header");
    header.className = "header";

    const title = document.createElement("h1");
    title.textContent = "Fur Travellers 🐾";

    const buttonLogin = document.createElement("button");
    buttonLogin.textContent = "Login";
    buttonLogin.className="Button-Login";

    buttonLogin.addEventListener("click", loginClick)

    header.appendChild(title, buttonLogin);

    return header;
}



