export const graphql = (query) => (token) => {
    console.log("##### fetching #####");
    fetch("/admin/api/2020-07/graphql.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": token,
        },
        body: JSON.stringify({ query: query }),
    })
        .then((res) => res.json())
        .then((res) => console.log(res.data))
        .catch((err) => console.error(JSON.stringify(err)));
};
