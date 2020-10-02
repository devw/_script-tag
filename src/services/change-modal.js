import { emailComponent } from "../components/email/email";
import { registerComponent } from "../components/register/register";
import { signinComponent } from "../components/signin/signin";
import { observer } from "./observer";

export const changeModal = {
    email: () => observer(emailComponent()),
    register: () => observer(registerComponent()),
    signin: () => observer(signinComponent()),
};
