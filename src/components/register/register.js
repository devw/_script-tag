import "./register.scss";
import html from "./register.html";
import { registerUser } from "../../services/storefront";
import { serialize } from "../../utils.js";
import { signIn } from "../../services/change-component";

const submitListener = async () => {
    //TODO refactoring needed
    node.style.opacity = "0.2";
    const formData = serialize(node.querySelector("form"));
    formData.acceptsMarketing = formData.acceptsMarketing === "on";
    delete formData.confirmPassword;
    const response = await registerUser(formData);
    console.log("registerUser", response);
    node.style.opacity = "1";
    if (isRegistered) signIn();
};

const isRegistered = (response) => response?.data?.customerCreate?.customer?.id;

const isFormFilled = (node) => {
    //TODO there are many other things to check (psw.length > 5, ...)
    const inputs = serialize(node.querySelector("form"));
    return Object.values(inputs).every((e) => e.length > 0);
};

const toggleBtn = (e) => {
    const btn = node.querySelector("button");
    isFormFilled(node)
        ? btn.removeAttribute("disabled")
        : btn.setAttribute("disabled", "true");
};

const init = (node) => {
    node.querySelector("[name=email]").value = sessionStorage.getItem("email");
    node.querySelector("button").addEventListener("click", submitListener);
    node.querySelector("form").addEventListener("input", toggleBtn);
};

const node = document.createElement("div");
node.innerHTML = html;

export const registerComponent = () => ({ dom: node, callback: init });
