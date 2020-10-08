const dotenv = require("dotenv");
dotenv.config();
const Shopify = require("shopify-api-node");
const prompts = require("prompts");
const { SHOPIFY_API_SECRET, SHOPIFY_API_KEY, SHOP, SCRIPT_TAG } = process.env;
const { scriptTag } = new Shopify({
    shopName: SHOP,
    apiKey: SHOPIFY_API_KEY,
    password: SHOPIFY_API_SECRET,
});

const API = {
    list: async () => {
        const scripts = await scriptTag.list({ src: SCRIPT_TAG });
        return `ScriptTags' list: ${JSON.stringify(scripts)}.`;
    },
    create: async () => {
        const param = { event: "onload", src: SCRIPT_TAG };
        const response = await scriptTag.create(param);
        return `Created the following script: ${JSON.stringify(response)}`;
    },
    clean: async () => {
        const scripts = await scriptTag.list({ src: SCRIPT_TAG });
        const ids = scripts.map((e) => e.id);
        ids.map((id) => scriptTag.delete(id));
        return `Removed the following scripts: ${ids}.`;
    },
};

(async () => {
    const questions = [
        {
            type: "select",
            name: "scriptTag",
            message: `Choose what to do with the following scriptTag "${SCRIPT_TAG}" and shop "${SHOP}"?`,
            choices: Reflect.ownKeys(API).map((e) => ({
                title: `${e} scriptTag`,
                value: e,
            })),
        },
    ];
    const onSubmit = async (_, answer) => console.log(await API[answer]());
    const response = await prompts(questions, { onSubmit });
})();
