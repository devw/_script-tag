import { popupComponent } from "./components/popup/popup";
import { storefront } from "./services/storefront";
import { aws } from "./services/aws";
import { changeModal } from "./services/change-modal";

document.body.appendChild(popupComponent());

window["AP"] = Object.assign(changeModal, storefront, aws);
