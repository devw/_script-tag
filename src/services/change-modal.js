import { emailComponent } from "../components/email/email";
import { registerComponent } from "../components/register/register";

const show = () => {
    document.querySelector(".main-modal").innerHTML = "";
    document.querySelector(".bg-modal").style.display = "flex";
};
const close = () => {
    document.querySelector(".bg-modal").style.display = "none";
};

export const changeModal = {
    email: () => {
        show();
        document.querySelector(".main-modal").appendChild(emailComponent());
    },
    register: () => {
        show();
        document.querySelector(".main-modal").appendChild(registerComponent());
    },
};
