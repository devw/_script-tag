import "./email.scss";
import html from "./email.html";
import { changeEmailView as cv } from "../../services/change-modal";

const toggleButton = (e) => {
    const btn = node.querySelector("button");
    const isEmail = /\S+@\S+\.\S+/.test(e.target.value);
    isEmail
        ? btn.removeAttribute("disabled")
        : btn.setAttribute("disabled", "true");
};

const email = () => node.querySelector("input").value;

const init = (node) => {
    node.querySelector(".input-text").addEventListener("input", toggleButton);
    node.querySelector("button").addEventListener("click", () => cv(email()));
};

const node = document.createElement("div");
node.innerHTML = html;

export const emailComponent = () => ({ dom: node, callback: init });
