import { emailComponent } from "../components/email/email";
import { registerComponent } from "../components/register/register";

const popupContainer = ".account-popup__container";
const popup = ".account-popup";
const popupClose = ".account-popup__close-popup";

const init = (node) => {
    node.querySelector(popupContainer).innerHTML = "";
    node.style.display = "flex";
    node.querySelector(popupClose).addEventListener("click", () => {
        node.style.display = "none";
    });
};

const initEmail = (node) => {
    const updateValue = (e) =>
        verifyEmail(e.target.value)
            ? node.querySelector("button").removeAttribute("disabled")
            : node.querySelector("button").setAttribute("disabled", "true");
    const verifyEmail = (e) => /\S+@\S+\.\S+/.test(e);
    node.querySelector(".input-text").addEventListener("input", updateValue);
};

export const changeModal = {
    email: () => {
        const node = document.querySelector(popup);
        init(node);
        node.querySelector(popupContainer).appendChild(emailComponent());
        initEmail(node);
    },
    register: () => {
        const node = document.querySelector(popup);
        init(node);
        node.querySelector(popupContainer).appendChild(registerComponent());
    },
};
