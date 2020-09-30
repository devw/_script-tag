import { emailComponent } from "../components/email/email";
import { registerComponent } from "../components/register/register";

const init = (node) => {
    node.querySelector(".main-modal").innerHTML = "";
    node.style.display = "flex";
    node.querySelector(".close-modal").addEventListener("click", () => {
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
        const node = document.querySelector(".bg-modal");
        init(node);
        node.querySelector(".main-modal").appendChild(emailComponent());
        initEmail(node);
    },
    register: () => {
        const node = document.querySelector(".bg-modal");
        init(node);
        node.querySelector(".main-modal").appendChild(registerComponent());
    },
};
