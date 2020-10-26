export const serialize = (form) => {
    const reducer = (acc, cur) => ({ ...acc, [cur[0]]: cur[1] });
    return Array.from(new FormData(form)).reduce(reducer, {});
};

export const isFormFilled = (node) => {
    const inputs = serialize(node.querySelector("form"));
    return Object.values(inputs).every((e) => e.length > 0);
};
