import { modalComponent } from "./components/modal/modal";
import { changeModal } from "./services/change-modal";
import { storefront } from "./services/storefront";
document.body.appendChild(modalComponent());

window["MyApp"] = Object.assign(changeModal, storefront);
