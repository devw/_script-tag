import { query } from "./query";
import { modalComponent } from "./components/modal/modal";

window["MyScript"] = { query: query };

document.body.appendChild(modalComponent());
