import "./signin.scss";
import html from "./signin.html";

export const signinComponent = () => {
    const element = document.createElement("div");
    element.innerHTML = html;
    return element;
};
