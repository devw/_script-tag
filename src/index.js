import { graphql } from "./services/graphql";
import { modalComponent } from "./components/modal/modal";
import { emailComponent } from "./components/email/email";
import { productsQuery } from "./queries/products.query";
import { modalHook } from "./hooks/modal.hook";

globalThis["MyScript"] = { graphql: graphql(productsQuery) };

document.body.appendChild(modalComponent());

document.querySelector(".main-modal").appendChild(emailComponent());

modalHook();
