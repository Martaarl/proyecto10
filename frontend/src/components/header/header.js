

export const Header = (loginClick) => {
    const header = document.createElement("header");
    header.className = "header";

    const logo = document.createElement("img");
    logo.className= "Logo";
    logo.src = "/frontend/assets/PHOTO-2025-02-06-22-10-19.jpg";

    const title = document.createElement("h1");
    title.textContent = "Fur Travellers 🐾";

    const buttonLogin = document.createElement("button");
    buttonLogin.textContent = "👤";
    buttonLogin.className="Button-Login";

    buttonLogin.addEventListener("click", loginClick)

    header.append(logo, title, buttonLogin);

    return header;
}



