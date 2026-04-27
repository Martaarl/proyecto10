export const Footer = () => {
    const footer = document.createElement("footer");
    footer.className = "Footer";

    const divFooter = document.createElement("div");
    divFooter.className = "Div-Footer";

    const anchorFooter = document.createElement("a");
    anchorFooter.href= "https://www.instagram.com/furtravellers?igsh=MWVwZ3F1b2M4YW5teg%3D%3D&utm_source=qr";
    anchorFooter.textContent = "🐾 Síguenos en Instagram";
    anchorFooter.className ="Anchor-Footer";
    anchorFooter.target= "_blank";

    const legal = document.createElement("p");
    legal.textContent="© 2026 Fur Travellers · Uso educativo";
    legal.className="Footer-Legal";

    divFooter.append(anchorFooter, legal);
    footer.appendChild(divFooter);

    return footer;
}