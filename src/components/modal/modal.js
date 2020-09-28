import "./modal.css";
import html from "./modal.html";

export const modalComponent = () => {
    const element = document.createElement("div");
    element.innerHTML = html;
    return element;
};
