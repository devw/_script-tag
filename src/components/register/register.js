import "./register.scss";
import html from "./register.html";
import { customerCreate } from "../../queries/mutations";

const serializeForm = function () {
    const obj = {};
    const formData = new FormData(node.querySelector("form"));
    for (let key of formData.keys()) {
        obj[key] = formData.get(key);
    }
    return obj;
};

const params = () => ({
    query: customerCreate,
    variables: {
        input: serializeForm(),
    },
});

const init = (node) => {
    node.querySelector("button").addEventListener("click", function (e) {
        console.log(params());
    });
};

const node = document.createElement("div");
node.innerHTML = html;

export const registerComponent = () => ({ dom: node, callback: init });
