import "./email.scss";
import html from "./email.hbs";
import { changeEmailView } from "../../services/change-component";

const toggleButton = (e) => {
    const btn = node.querySelector("button");
    const isEmail = /\S+@\S+\.\S+/.test(e.target.value);
    isEmail
        ? btn.removeAttribute("disabled")
        : btn.setAttribute("disabled", "true");
};

const submitListener = () => {
    const email = node.querySelector("[name=email]").value;
    sessionStorage.setItem("email", email);
    node.style.opacity = "0.2";
    changeEmailView(email);
};

const init = (node) => {
    node.querySelector(".input-text").addEventListener("input", toggleButton);
    node.querySelector("button").addEventListener("click", submitListener);
};

const node = document.createElement("div");
node.innerHTML = html;

export const emailComponent = () => ({ dom: node, callback: init });
