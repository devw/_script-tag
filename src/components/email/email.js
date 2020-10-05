import "./email.scss";
import html from "./email.html";
import { changeEmailView } from "../../services/change-component";

const toggleButton = (e) => {
    const btn = node.querySelector("button");
    const isEmail = /\S+@\S+\.\S+/.test(e.target.value);
    isEmail
        ? btn.removeAttribute("disabled")
        : btn.setAttribute("disabled", "true");
};

const submitListener = () => changeEmailView(node.querySelector("input").value);

const init = (node) => {
    node.querySelector(".input-text").addEventListener("input", toggleButton);
    node.querySelector("button").addEventListener("click", submitListener);
};

const node = document.createElement("div");
node.innerHTML = html;

export const emailComponent = () => ({ dom: node, callback: init });
