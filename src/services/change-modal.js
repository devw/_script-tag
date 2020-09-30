import { emailComponent } from "../components/email/email";
import { registerComponent } from "../components/register/register";

const init = () => {
    document.querySelector(".main-modal").innerHTML = "";
    document.querySelector(".bg-modal").style.display = "flex";
    document.querySelector(".close-modal").addEventListener("click", () => {
        document.querySelector(".bg-modal").style.display = "none";
    });
};

export const changeModal = {
    email: () => {
        init();
        document.querySelector(".main-modal").appendChild(emailComponent());
    },
    register: () => {
        init();
        document.querySelector(".main-modal").appendChild(registerComponent());
    },
};
