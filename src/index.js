import { popupComponent } from "./components/popup/popup";
import { storefront } from "./services/storefront";
import { aws } from "./services/aws";
import { changeComponent } from "./services/change-component";

document.body.appendChild(popupComponent());

window["AP"] = Object.assign(changeComponent, storefront, aws);
