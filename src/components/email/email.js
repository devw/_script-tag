import "./email.scss";
import html from "./email.html";
import { changeEmailView } from "../../services/change-modal";

const toggleButton = (e) =>
    /\S+@\S+\.\S+/.test(e.target.value)
        ? node.querySelector("button").removeAttribute("disabled")
        : node.querySelector("button").setAttribute("disabled", "true");

const validateEmail = () => {
    changeEmailView(node.querySelector("input").value);
};

const init = (node) => {
    node.querySelector(".input-text").addEventListener("input", toggleButton);
    node.querySelector("button").addEventListener("click", validateEmail);
};

const node = document.createElement("div");
node.innerHTML = html;

export const emailComponent = () => ({ dom: node, callback: init });
