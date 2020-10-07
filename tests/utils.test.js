import { serialize } from "../src/utils";

describe("Encode a set of form elements as a JSON object", () => {
    test("It should retrieve an empty JSON object from an empty HTML form", () => {
        const formElement = document.createElement("form");
        expect(serialize(formElement)).toMatchObject({});
    });
    test("It should retrieve a JSON object from an HTML form", () => {
        const formElement = document.createElement("form");
        formElement.innerHTML = "<input name='age' value='10'>";
        expect(serialize(formElement)).toMatchObject({ age: "10" });
    });
});
