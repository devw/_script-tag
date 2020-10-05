import { serialize } from "../src/utils";

test("It should retrieving a FormData object from an HTML form", () => {
    const formElement = document.createElement("form");
    expect(serialize(formElement)).toMatchObject({});
});

test("It should retrieving a FormData object from an HTML form", () => {
    const formElement = document.createElement("form");
    formElement.innerHTML = "<input name='age' value='10'>";
    expect(serialize(formElement)).toMatchObject({ age: "10" });
});
