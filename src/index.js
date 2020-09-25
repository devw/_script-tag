import { graphql } from "./services/graphql";
import { modalComponent } from "./components/modal/modal";

globalThis["MyScript"] = { graphql: graphql };
document.body.appendChild(modalComponent());
