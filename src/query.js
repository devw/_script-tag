export const query = (token) => {
    console.log("##### fetch");
    const url = `/admin/api/2020-07/graphql.json`;
    const query = `{
        shop {
          products(first: 5) {
            edges {
              node {
                id
                handle
              }
            }
            pageInfo {
              hasNextPage
            }
          }
        }
    }`;

    fetch(url, {
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
