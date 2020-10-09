import { emailComponent } from "../components/email/email";
import { registerComponent } from "../components/register/register";
import { signInComponent } from "../components/signin/signin";
import { loadComponent } from "./load-component";
import { aws } from "./aws";

export const changeComponent = {
    email: () => loadComponent(emailComponent()),
    register: () => loadComponent(registerComponent()),
    signIn: () => loadComponent(signInComponent()),
};

export const changeEmailView = async (email) => {
    const isValidEmail = await aws.validateEmail(email);
    isValidEmail ? changeComponent.signIn() : changeComponent.register();
};

export const signIn = () => loadComponent(signInComponent());
