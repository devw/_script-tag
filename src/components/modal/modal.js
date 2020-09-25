import "./modal.css";

const handleAccountClick = (e) => {
    e.preventDefault();
    document.querySelector(".bg-modal").style.display = "flex";
};

window.addEventListener("DOMContentLoaded", (_) => {
    document
        .querySelector(".site-header__account")
        .addEventListener("click", handleAccountClick);

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".bg-modal").style.display = "none";
    });
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
