import "./register.scss";
import html from "./register.html";
import { registerUser } from "../../services/storefront";
import { serialize } from "../../utils.js";

const submitListener = () => {
    //TODO refactoring
    const formData = serialize(node.querySelector("form"));
    formData.acceptsMarketing = formData.acceptsMarketing === "on";
    delete formData.confirmPassword;
    return registerUser(formData);
};

//TODO add toggleButton

const init = (node) =>
    node.querySelector("button").addEventListener("click", submitListener);

const node = document.createElement("div");
node.innerHTML = html;

export const registerComponent = () => ({ dom: node, callback: init });
