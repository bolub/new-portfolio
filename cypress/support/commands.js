// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("seedAndVisit", (seedData = "fixture:blogPosts") => {
  cy.server();
  cy.route("GET", "/blog-posts", seedData).as("load");

  // =====================================================================

  cy.visit("http://localhost:3001/blog");

  // Cypress only "visits" an endpoint for about 4s before it actually
  // times out(default behavior), so we're basically telling cypress to
  //chill till the request has been complete
  cy.wait("@load");
});