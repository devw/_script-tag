export const modalHook = () => {
    document.querySelector(".close-modal").addEventListener("click", () => {
        document.querySelector(".bg-modal").style.display = "none";
    });
};
