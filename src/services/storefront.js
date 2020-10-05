import {
    customerCreate,
    customerAccessTokenCreate,
} from "../queries/mutations";

const config = require("../config.js");

const getParams = ({ query, input }) => ({
    query: query,
    variables: {
        input: input,
    },
});

const getHeader = (body) => ({
    method: "post",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Shopify-Storefront-Access-Token": config.STOREFRONT_TOKEN,
    },
    body: JSON.stringify(body),
});

const postRequest = async (fetchBody) => {
    // TO IMPROVE https://codepen.io/danielone/pen/ZGRgGJ
    const node = document.querySelector(".account-popup__container");
    node.style.opacity = "0.2";
    const response = await fetch(config.STOREFRONT_URL, getHeader(fetchBody));
    const data = await response.json();
    console.log(JSON.stringify(data));
    node.style.opacity = "";
};

export const registerUser = async (formData) => {
    const fetchBody = getParams({ query: customerCreate, input: formData });
    postRequest(fetchBody);
};
export const signIn = async (formData) => {
    const fetchBody = getParams({
        query: customerAccessTokenCreate,
        input: formData,
    });
    postRequest(fetchBody);
};
export const activateAccount = async () => {
    const response = await fetch(config.STOREFRONT_URL, getHeader(params));
    const data = await response.json();
    console.log(JSON.stringify(data));
};

export const storefront = {
    activateAccount: activateAccount,
    registerUser: registerUser,
};
