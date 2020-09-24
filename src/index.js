import { query } from "./query";
import "./style.css";

const component = () => {
    window["MyScript"] = { query: query };
    const element = document.createElement("div");
    element.innerHTML = `
        <div class="bg-modal">
            <div class="content-modal">
                <div class="close">+</div>
            </div>
        </div>
    `;

    return element;
};

const handleAccountClick = (e) => {
    e.preventDefault();
    document.querySelector(".bg-modal").style.display = "flex";
};

document.body.appendChild(component());

document
    .querySelector(".site-header__account")
    .addEventListener("click", handleAccountClick);

document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".bg-modal").style.display = "none";
});
