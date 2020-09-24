import { Api } from "./graphql";

function component() {
    const element = document.createElement("div");

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "Hello webpack";
    window["MyScript"] = Api;
    return element;
}

document.body.appendChild(component());
