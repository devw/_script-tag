import "./email.scss";
import html from "./email.hbs";
import { signIn, register } from "../../services/change-component";

const toggleButton = (e) => {
    const btns = node.querySelectorAll("button");
    const isEmail = /\S+@\S+\.\S+/.test(e.target.value);
    isEmail
        ? btns.forEach((e) => e.removeAttribute("disabled"))
        : btns.forEach((e) => e.setAttribute("disabled", "true"));
};

const init = (node) => {
    node.querySelector(".input-text").addEventListener("input", toggleButton);
    node.querySelector("[name=signUp]").addEventListener("click", register);
    node.querySelector("[name=signIn]").addEventListener("click", signIn);
};

const node = document.createElement("div");
node.innerHTML = html;

export const emailComponent = () => ({ dom: node, callback: init });
