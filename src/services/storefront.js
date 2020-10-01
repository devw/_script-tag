import { activateAccount } from "../queries/mutations";

const config = require("../config.js");

const params = {
    query: activateAccount,
    variables: {
        input: {
            email: `${Math.random().toString().slice(2, 9)}@gmail.com`,
            password: "password",
        },
    },
};
const optionsQuery = {
    method: "post",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Shopify-Storefront-Access-Token": config.STOREFRONT_TOKEN,
    },
    body: JSON.stringify(params),
};

export const storefront = {
    activateAccount: async () => {
        const response = await fetch(config.STOREFRONT_URL, optionsQuery);
        const data = await response.json();
        console.log(JSON.stringify(data));
    },
};
