import "./modal.css";

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
