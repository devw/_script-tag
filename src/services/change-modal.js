import { emailComponent } from "../components/email/email";
import { registerComponent } from "../components/register/register";

const init = () => {
    document.querySelector(".main-modal").innerHTML = "";
    document.querySelector(".bg-modal").style.display = "flex";
    document.querySelector(".close-modal").addEventListener("click", () => {
        document.querySelector(".bg-modal").style.display = "none";
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
        init();
        initEmail(
            document.querySelector(".main-modal").appendChild(emailComponent())
        );
    },
    register: () => {
        init();
        document.querySelector(".main-modal").appendChild(registerComponent());
    },
};
