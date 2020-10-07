import "./signin.scss";
import html from "./signin.html";
import { serialize } from "../../utils.js";
import { signIn } from "../../services/storefront";

const submitListener = async () => {
    node.style.opacity = "0.2";
    const formData = serialize(node.querySelector("form"));
    const result = await signIn(formData);
    console.log("registerUser", result);
    node.style.opacity = "1";
};

const init = (node) => {
    node.querySelector("[name=email]").value = sessionStorage.getItem("email");
    node.querySelector("button").addEventListener("click", submitListener);
};

const node = document.createElement("div");
node.innerHTML = html;

export const signinComponent = () => ({ dom: node, callback: init });
