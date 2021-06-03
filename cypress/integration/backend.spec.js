describe("Test backend", () => {
  // basically what happens before each test runs i.e before each individual "it"
  beforeEach(() => {
    cy.visit("/");
  });

  // it("checks if the email field has an id of 'email'", () => {
  //   // check the focused element and see if it has an id of email
  //   cy.focused().should("have.id", "email");
  // });

  it("accepts email input", () => {
    const typedEmail = "abiol5202@gmail.com";

    cy.get("#email").type(typedEmail).should("have.value", typedEmail);
  });
});
