import { renderApp } from "../../main/main.js";
import { isLogged, logout } from "../../utils/logged.js";

export const Header = (loginClick, onSearch, profileClick,onLogout) => {
    const header = document.createElement("header");
    header.className = "header";

    const upperHeader = document.createElement("div");
    upperHeader.className="Upper-Header";

    const logo = document.createElement("img");
    logo.className= "Logo";
    logo.src = "/logo.jpg";

    logo.addEventListener("click", () => {
        renderApp();
    })

    const title = document.createElement("h1");
    title.textContent = "Fur Travellers 🐾";
    title.className= "Title-Home";

    title.addEventListener("click", () => {
        renderApp();
    })

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
        buttonLogin.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
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



