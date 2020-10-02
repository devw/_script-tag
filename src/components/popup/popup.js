import "./popup.scss";
import html from "./popup.html";

export const popupComponent = () => {
    const element = document.createElement("div");
    element.innerHTML = html;
    return element;
};
