import { graphql } from "./services/graphql";
import { modalComponent } from "./components/modal/modal";
import { productsQuery } from "./queries/products.query";

globalThis["MyScript"] = { graphql: graphql(productsQuery) };

const handleAccountClick = (e) => {
    e.preventDefault();
    document.querySelector(".bg-modal").style.display = "flex";
};

document.body.appendChild(modalComponent());

document
    .querySelector(".site-header__account")
    .addEventListener("click", handleAccountClick);
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".bg-modal").style.display = "none";
});
