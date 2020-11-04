import "./custom.css";
import html from "./custom.html";

const $ = document.querySelector.bind(document);

const setStyle = (e) => {
    const p = `--${e}`;
    const v = $(`[name='${e}']`).value;
    document.documentElement.style.setProperty(p, v);
};

const getInputNames = (e) =>
    Array.from(e.querySelectorAll("input")).map((e) => e.name);

const init = () => {
    $("form").addEventListener("submit", (e) => {
        e.preventDefault();
        getInputNames(e.target).forEach((e) => setStyle(e));
    });
};

const node = document.createElement("div");
node.innerHTML = html;
document.body.appendChild(node);

export const custom = init;
