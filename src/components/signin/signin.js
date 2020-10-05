import "./signin.scss";
import html from "./signin.html";
import { serialize } from "../../utils.js";
import { signIn } from "../../services/storefront";

const submitListener = () => signIn(serialize(node.querySelector("form")));

const init = (node) =>
    node.querySelector("button").addEventListener("click", submitListener);

const node = document.createElement("div");
node.innerHTML = html;

export const signinComponent = () => ({ dom: node, callback: init });
