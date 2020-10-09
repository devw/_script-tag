import { emailComponent } from "../components/email/email";
import { registerComponent } from "../components/register/register";
import { signInComponent } from "../components/signin/signin";
import { loadComponent } from "./load-component";

export const email = () => loadComponent(emailComponent());
export const signIn = () => loadComponent(signInComponent());
export const register = () => loadComponent(registerComponent());
