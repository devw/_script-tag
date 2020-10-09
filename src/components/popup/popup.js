import "./popup.scss";
import html from "./popup.hbs";

const element = document.createElement("div");
element.innerHTML = html;

export const popupComponent = () => element;
