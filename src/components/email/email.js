import "./email.scss";
import html from "./email.html";

export const emailComponent = () => {
    const element = document.createElement("div");
    element.innerHTML = html;
    return element;
};
