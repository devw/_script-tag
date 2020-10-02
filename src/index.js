import { popupComponent } from "./components/popup/popup";
import { changeModal } from "./services/change-modal";
import { storefront } from "./services/storefront";
import { aws } from "./services/aws";

document.body.appendChild(popupComponent());

window["AP"] = Object.assign(changeModal, storefront, aws);
