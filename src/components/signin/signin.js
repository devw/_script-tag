import "./signin.scss";
import html from "./signin.hbs";
import { serialize, isFormFilled } from "../../utils.js";
import { signIn } from "../../services/storefront";

const submitListener = async () => {
    //TODO refactoring by using {target}; target.closest("form") and removing node
    node.style.opacity = "0.1";
    const formData = serialize(node.querySelector("form"));
    const { data } = await signIn(formData);
    node.style.opacity = "1";
    console.log("submitListener", data);
    isLoggedIn(data)
        ? alert("You are logged in") || node.parentNode.parentNode.remove() //TODO I should make it adding removing HTML classes
        : alert("Wrong password/email, try again!");
};

//TODO mode in utils and use node.closest("form")
const toggleBtn = () => {
    const btn = node.querySelector("button");
    isFormFilled(node)
        ? btn.removeAttribute("disabled")
        : btn.setAttribute("disabled", "true");
};

const isLoggedIn = (data) =>
    data?.customerAccessTokenCreate?.customerAccessToken?.accessToken;

const init = (node) => {
    node.querySelector("form").addEventListener("input", toggleBtn);
    node.querySelector("[name=email]").value = sessionStorage.getItem("email");
    node.querySelector("button").addEventListener("click", submitListener);
};

const node = document.createElement("div");
node.innerHTML = html;

export const signInComponent = () => ({ dom: node, callback: init });
