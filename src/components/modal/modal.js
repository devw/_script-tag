import "./modal.css";

window.addEventListener("DOMContentLoaded", (_) => {
    console.log(document.querySelector(".site-header__account"));
});

export const modalComponent = () => {
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
