export const Header = () => {
    const header = document.createElement("header");
    header.className = "header";

    const title = document.createElement("h1");
    title.textContent = "Fur Travellers 🐾";

    header.appendChild(title);

    return header;
}



