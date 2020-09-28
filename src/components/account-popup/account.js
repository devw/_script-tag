import "./account.scss";
import html from "./account.html";

export const account = () => {
    const element = document.createElement("div");
    element.innerHTML = html;
    return element;
};
