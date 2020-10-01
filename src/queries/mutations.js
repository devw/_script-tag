export const activateAccount = ` mutation customerCreate($input: CustomerCreateInput!) {
  customerCreate(input: $input) {
    customer {
      id
    }
    userErrors {
      field
      message
    }
  }
}`;
