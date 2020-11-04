import "./custom.css";
import html from "./custom.html";

const $ = document.querySelector.bind(document);

const json = {
    "background-color": "rgba(0, 91, 91, 0.7)",
    "main-bg-color": "#aaa",
    "font-size": "40px",
};

const setStyle = (e) => {
    document.documentElement.style.setProperty(
        `--${e}`,
        $("[name='custom-background-color']").value
    );
};

const applyJsonStyle = () => {
    Reflect.ownKeys(json).forEach(setStyle);
};

const init = () => {
    document
        .querySelector(".custom-submit")
        .addEventListener("click", applyJsonStyle);
};

const node = document.createElement("div");
node.innerHTML = html;
document.body.appendChild(node);

export const custom = init;
