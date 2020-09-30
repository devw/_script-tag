import { modalComponent } from "./components/modal/modal";
import { productsQuery } from "./queries/products.query";
import { changeModal } from "./services/change-modal";
import { graphql } from "./services/graphql";

globalThis["MyScript"] = { graphql: graphql(productsQuery) };
document.body.appendChild(modalComponent());

window["MyApp"] = changeModal;
