import "./email.scss";
import html from "./email.html";

const init = (node) => {
    const updateValue = (e) =>
        verifyEmail(e.target.value)
            ? node.querySelector("button").removeAttribute("disabled")
            : node.querySelector("button").setAttribute("disabled", "true");
    const verifyEmail = (e) => /\S+@\S+\.\S+/.test(e);
    node.querySelector(".input-text").addEventListener("input", updateValue);
};

export const emailComponent = () => {
    const element = document.createElement("div");
    element.innerHTML = html;
    return { dom: element, callback: init };
};
