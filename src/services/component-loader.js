const popupContainer = ".account-popup__container";
const popup = ".account-popup";
const popupClose = ".account-popup__close-popup";

const init = (node) => {
    node.querySelector(popupContainer).innerHTML = "";
    node.style.display = "flex";
    node.querySelector(popupClose).addEventListener("click", () => {
        node.style.display = "none";
    });
};

export const loadComponent = ({ dom, callback }) => {
    const node = document.querySelector(popup);
    init(node);
    node.querySelector(popupContainer).appendChild(dom);
    callback(node);
};
