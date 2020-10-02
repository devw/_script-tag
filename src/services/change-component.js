import { emailComponent } from "../components/email/email";
import { registerComponent } from "../components/register/register";
import { signinComponent } from "../components/signin/signin";
import { loadComponent } from "./loade-component";
import { aws } from "./aws";

export const changeComponent = {
    email: () => loadComponent(emailComponent()),
    register: () => loadComponent(registerComponent()),
    signin: () => loadComponent(signinComponent()),
};

export const changeEmailView = async (email) => {
    const isValidEmail = await aws.validateEmail(email);
    isValidEmail ? changeComponent.signin() : changeComponent.register();
};
