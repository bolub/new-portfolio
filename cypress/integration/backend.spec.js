describe("Test backend", () => {
  it("visits the backend and tests our login details", () => {
    // Visit the backend server
    cy.visit("/");

    // check the focused element and see if it has an id of email
    cy.focused().should("have.id", "email");
  });

  it.only("accepts email input", () => {
    const typedEmail = "abiol5202@gmail.com";

    cy.visit("/");
    cy.get("#email").type(typedEmail).should("have.value", typedEmail);
  });
});
