import { customerCreate } from "../queries/mutations";

const config = require("../config.js");

const getParams = ({ query, input }) => ({
    query: query,
    variables: {
        input: input,
    },
});

const getHeader = (params) => ({
    method: "post",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Shopify-Storefront-Access-Token": config.STOREFRONT_TOKEN,
    },
    body: JSON.stringify(params),
});

export const registerUser = async (input) => {
    delete input.confirmPassword; // TO improve
    const params = getParams({ query: customerCreate, input: input });
    console.log(params);
    // const response = await fetch(config.STOREFRONT_URL, getHeader(params));
    // const data = await response.json();
    // console.log(JSON.stringify(data));
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
