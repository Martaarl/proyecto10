export const Footer = async () => {
    const footer = document.createElement("footer");

    const anchorFooter = document.createElement("anchor");
    anchorFooter.className ="Anchor-Fotter";

    const divFooter = document.createElement("div");
    divFooter.className = "Div-Footer";

    divFooter.appendChild(anchorFooter);
    footer.appendChild(divFooter);
}