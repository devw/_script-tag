import { modalComponent } from "./components/modal/modal";
import { changeModal } from "./services/change-modal";
import { storefront } from "./services/storefront";
import { aws } from "./services/aws";

document.body.appendChild(modalComponent());

window["AP"] = Object.assign(changeModal, storefront, aws);
