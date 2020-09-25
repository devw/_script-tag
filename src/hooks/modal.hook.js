const handleAccountClick = (e) => {
    e.preventDefault();
    document.querySelector(".bg-modal").style.display = "flex";
};

export const modalHook = () => {
    document
        .querySelector(".site-header__account")
        .addEventListener("click", handleAccountClick);
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".bg-modal").style.display = "none";
    });
};
