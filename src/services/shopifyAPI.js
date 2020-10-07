const Shopify = require("shopify-api-node");
const prompts = require("prompts");
const dotenv = require("dotenv");

dotenv.config();

const { SHOPIFY_API_SECRET, SHOPIFY_API_KEY, SHOP_NAME } = process.env;
const { SCRIPT_TAG_SRC } = process.env;

const shopify = new Shopify({
    shopName: SHOP_NAME,
    apiKey: SHOPIFY_API_KEY,
    password: SHOPIFY_API_SECRET,
});

const scriptTagCreate = () =>
    shopify.scriptTag.create({ event: "onload", src: SCRIPT_TAG_SRC });

const scriptTagsDelete = (id) => shopify.scriptTag.delete(id);

const scriptTagsIds = (scriptTags) => scriptTags.map((e) => e.id);

const scriptTagsGet = (url) => shopify.scriptTag.list({ src: SCRIPT_TAG_SRC });

const clean = async () => {
    const scripts = await scriptTagsGet();
    const ids = await scriptTagsIds(scripts);
    ids.map((id) => scriptTagsDelete(id));
    console.log(`Removed the following scripts: ${ids}`);
};

const create = async () => {
    await scriptTagCreate();
    const scripts = await scriptTagsGet();
    console.log(`ScriptTags' list: ${JSON.stringify(scripts)}`);
};

(async () => {
    const questions = [
        {
            type: "toggle",
            name: "value",
            message: `Do you want to create the following scriptTag "${SCRIPT_TAG_SRC}"?`,
            initial: true,
            active: "yes",
            inactive: "no",
        },
    ];
    const onSubmit = (prompt, answer) => (answer ? create() : clean());
    const response = await prompts(questions, { onSubmit });
})();
