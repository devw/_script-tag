import { graphql } from "./services/graphql";
import { modalComponent } from "./components/modal/modal";
import { productsQuery } from "./queries/products.query";
import { modalHook } from "./hooks/modal.hook";
import { emailComponent } from "./components/email/email";
import { registerComponent } from "./components/register/register";

globalThis["MyScript"] = { graphql: graphql(productsQuery) };

document.body.appendChild(modalComponent());

document.querySelector(".main-modal").appendChild(registerComponent());

modalHook();
