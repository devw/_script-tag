import { popupComponent } from "./components/popup/popup";
import { email } from "./services/change-component";
import { custom } from "./components/custom/custom";

document.body.appendChild(popupComponent());
email();
custom();
