import "./register.scss";
import html from "./register.html";

export const registerComponent = () => {
    const element = document.createElement("div");
    element.innerHTML = html;
    return { dom: element, callback: () => {} };
};
