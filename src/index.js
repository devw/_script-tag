import { graphql } from "./services/graphql";
import { modalComponent } from "./components/modal/modal";
import { productsQuery } from "./queries/products.query";

globalThis["MyScript"] = { graphql: graphql(productsQuery) };
document.body.appendChild(modalComponent());
