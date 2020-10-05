export const serialize = (form) => {
    const reducer = (acc, cur) => Object.assign(acc, { [cur[0]]: cur[1] });
    return Array.from(new FormData(form)).reduce(reducer, {});
};
