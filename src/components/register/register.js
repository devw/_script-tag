import "./register.scss";
import html from "./register.html";
import { registerUser } from "../../services/storefront";
import { serialize } from "../../utils.js";

const init = (node) => {
    const listener = () => registerUser(serialize(node.querySelector("form")));
    node.querySelector("button").addEventListener("click", listener);
};

const node = document.createElement("div");
node.innerHTML = html;

export const registerComponent = () => ({ dom: node, callback: init });
