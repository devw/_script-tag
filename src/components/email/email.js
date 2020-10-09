import "./email.scss";
import html from "./email.hbs";
import { signIn, register } from "../../services/change-component";

const toggleButtons = ({ target }) => {
    const btns = node.querySelectorAll("button");
    const isEmail = /\S+@\S+\.\S+/.test(target.value);
    isEmail ? activeBtns(btns, target) : disableBtns(btns);
};

const disableBtns = (btns) =>
    btns.forEach((e) => e.setAttribute("disabled", "true"));
const activeBtns = (btns, target) => {
    btns.forEach((e) => e.removeAttribute("disabled"));
    sessionStorage.setItem("email", target.value);
};

const init = (node) => {
    node.querySelector(".input-text").addEventListener("input", toggleButtons);
    node.querySelector("[name=signUp]").addEventListener("click", register);
    node.querySelector("[name=signIn]").addEventListener("click", signIn);
};

const node = document.createElement("div");
node.innerHTML = html;

export const emailComponent = () => ({ dom: node, callback: init });
