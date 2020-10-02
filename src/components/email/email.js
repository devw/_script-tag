import "./email.scss";
import html from "./email.html";

const toggleButton = (e) =>
    /\S+@\S+\.\S+/.test(e.target.value)
        ? node.querySelector("button").removeAttribute("disabled")
        : node.querySelector("button").setAttribute("disabled", "true");

const init = (node) =>
    node.querySelector(".input-text").addEventListener("input", toggleButton);

const node = document.createElement("div");
node.innerHTML = html;

export const emailComponent = () => ({ dom: node, callback: init });
