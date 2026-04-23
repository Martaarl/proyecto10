import { isLogged, logout } from "../../../../src/utils/logged.js";

export const Header = (loginClick, onSearch, profileClick,onLogout) => {
    const header = document.createElement("header");
    header.className = "header";

    const upperHeader = document.createElement("div");
    upperHeader.className="Upper-Header";

    const logo = document.createElement("img");
    logo.className= "Logo";
    logo.src = "/frontend/assets/PHOTO-2025-02-06-22-10-19.jpg";

    const title = document.createElement("h1");
    title.textContent = "Fur Travellers 🐾";

    if (isLogged()) {
        const buttonProfile = document.createElement("button");
        buttonProfile.textContent = "❤️";
        buttonProfile.className = "Button-Profile";

        const buttonLogout = document.createElement("button");
        buttonLogout.textContent = "🚪";
        buttonLogout.className = "Button-Logout";

        buttonProfile.addEventListener("click", profileClick);

        buttonLogout.addEventListener("click", () => {
            logout();
            onLogout();
        });
        upperHeader.append(logo, title, buttonProfile, buttonLogout);
    } else {
        const buttonLogin = document.createElement("button");
        buttonLogin.textContent = "👤";
        buttonLogin.className="Button-Login";

        buttonLogin.addEventListener("click", loginClick)

        upperHeader.append(logo, title, buttonLogin);
    };
    
    const lowerHeader = document.createElement("div");
    lowerHeader.className = "Lower-Header";

    const subtitle = document.createElement("h2");
    subtitle.className="Subtitle";
    subtitle.textContent = "Explora viajes y destinos pet-friendly en España y el mundo";

    const searchInput = document.createElement("input");
    searchInput.placeholder = " 🔎 País, provincia, ciudad...";
    searchInput.className="Search-Input";

    searchInput.addEventListener("input", (e) => {
        onSearch(e.target.value)});

    lowerHeader.append(subtitle,searchInput);

    header.append(upperHeader, lowerHeader);

    return header;
}



