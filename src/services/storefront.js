import { customerCreate } from "../queries/mutations";

const config = require("../config.js");

const params = {
    query: customerCreate,
    variables: {
        input: {
            email: `${Math.random().toString().slice(2, 9)}@gmail.com`,
            password: "password",
        },
    },
};

const header = (params) => ({
    method: "post",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Shopify-Storefront-Access-Token": config.STOREFRONT_TOKEN,
    },
    body: JSON.stringify(params),
});

export const storefront = {
    activateAccount: async () => {
        const response = await fetch(config.STOREFRONT_URL, header(params));
        const data = await response.json();
        console.log(JSON.stringify(data));
    },
    registerUser: async (params) => {
        const response = await fetch(config.STOREFRONT_URL, header(params));
        const data = await response.json();
        console.log(JSON.stringify(data));
    },
};
