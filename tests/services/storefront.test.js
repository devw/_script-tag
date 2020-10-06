import { signIn } from "../../src/services/storefront";
// TODO Refactor is needed because I should not go to the network in the test

describe("When sign-in through Storefront API (email and password defined)", () => {
    test("It should return a customerAccessTokenCreate property", async () => {
        const formData = { email: "test@test.com", password: "test" };
        const response = await signIn(formData);
        expect(response?.data?.customerAccessTokenCreate).toBeDefined();
    });
});

describe("When sign-in through Storefront API (email and password not defined)", () => {
    test("It should not return a customerAccessTokenCreate property", async () => {
        const formData = {};
        const response = await signIn(formData);
        expect(response?.data?.customerAccessTokenCreate).toBeUndefined();
    });
});
