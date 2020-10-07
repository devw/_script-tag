import { signIn, registerUser } from "../../src/services/storefront";
// TODO A refactor is needed because I should not go to the network in the test
// TODO I need to mock the fetch request

describe("Signing with Storefront API and valid information", () => {
    test("It should return a customerAccessTokenCreate property", async () => {
        const formData = { email: "test@test.com", password: "test" };
        const response = await signIn(formData);
        expect(response?.data?.customerAccessTokenCreate).toBeDefined();
    });
});

describe("Signing with Storefront API and invalid information", () => {
    test("It should not return a customerAccessTokenCreate property", async () => {
        const formData = {};
        const response = await signIn(formData);
        expect(response?.data?.customerAccessTokenCreate).toBeUndefined();
    });
});

describe("Registering with Storefront API and valid information", () => {
    test("It should return a customer id", async () => {
        const email = `${Math.random().toString(36).substring(5)}@test.com`;
        const formData = {
            email: email,
            firstName: "test",
            lastName: "test",
            password: "secret123",
            acceptsMarketing: false,
        };
        const response = await registerUser(formData);
        expect(response?.data?.customerCreate?.customer?.id).toBeDefined();
        // TODO cancel the created customer
    });
});
