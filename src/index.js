import { graphql } from "./services/graphql";
import { modalComponent } from "./components/modal/modal";
import { account } from "./components/account-popup/account";
import { productsQuery } from "./queries/products.query";
import { modalHook } from "./hooks/modal.hook";

globalThis["MyScript"] = { graphql: graphql(productsQuery) };

document.body.appendChild(modalComponent());
document.body.appendChild(account());
modalHook();
