import { emailComponent } from "../components/email/email";
import { registerComponent } from "../components/register/register";
import { signinComponent } from "../components/signin/signin";
import { loadComponent } from "./component-loader";
import { aws } from "./aws";

export const changeEmailView = async (email) => {
    const isValidEmail = await aws.validateEmail(email);
    isValidEmail ? changeModal.signin() : changeModal.register();
};

export const changeModal = {
    email: () => loadComponent(emailComponent()),
    register: () => loadComponent(registerComponent()),
    signin: () => loadComponent(signinComponent()),
};
