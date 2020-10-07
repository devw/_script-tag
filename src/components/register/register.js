import "./register.scss";
import html from "./register.html";
import { registerUser } from "../../services/storefront";
import { serialize } from "../../utils.js";

const submitListener = async () => {
    //TODO refactoring
    node.style.opacity = "0.2";
    const formData = serialize(node.querySelector("form"));
    formData.acceptsMarketing = formData.acceptsMarketing === "on";
    delete formData.confirmPassword;
    const result = await registerUser(formData);
    console.log("registerUser", result);
    node.style.opacity = "1";
};

//TODO add toggleButton

const init = (node) => {
    node.querySelector("[name=email]").value = sessionStorage.getItem("email");
    node.querySelector("button").addEventListener("click", submitListener);
};

const node = document.createElement("div");
node.innerHTML = html;

export const registerComponent = () => ({ dom: node, callback: init });
