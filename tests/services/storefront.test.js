import { signIn } from "../../src/services/storefront";
// TODO A refactor is needed because I should not go to the network in the test
// TODO I need to mock the fetch request

describe("Signing Storefront API with valid information", () => {
    test("It should return a customerAccessTokenCreate property", async () => {
        const formData = { email: "test@test.com", password: "test" };
        const response = await signIn(formData);
        expect(response?.data?.customerAccessTokenCreate).toBeDefined();
    });
});

describe("Signing Storefront API with invalid information", () => {
    test("It should not return a customerAccessTokenCreate property", async () => {
        const formData = {};
        const response = await signIn(formData);
        expect(response?.data?.customerAccessTokenCreate).toBeUndefined();
    });
});
