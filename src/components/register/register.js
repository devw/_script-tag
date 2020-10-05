import "./register.scss";
import html from "./register.html";
import { registerUser } from "../../services/storefront";
import { serialize } from "../../utils.js";

const submitListener = () => {
    const values = serialize(node.querySelector("form"));
    values.accepts_marketing = values.accepts_marketing === "on";
    return registerUser(values);
};

const init = (node) =>
    node.querySelector("button").addEventListener("click", submitListener);

const node = document.createElement("div");
node.innerHTML = html;

export const registerComponent = () => ({ dom: node, callback: init });
