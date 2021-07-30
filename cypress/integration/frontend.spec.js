describe("Test Frontend", () => {
  // beforeEach(()=>{
  //   cy.visit("http://localhost:3000");
  // })

  it("checks length of blog posts", () => {
    // ====================================================================

    // basically what we're doing here is, we're making a get request to /blog-posts and interrupting
    // the response with our own data

    // load dummy data, hard way
    // intercept the server

    // cy.server();

    // cy.fixture("blogPosts").then((blogPosts) => {
    //   cy.route("GET", "/blog-posts", blogPosts);
    // });

    // load dummy data, easy way
    cy.seedAndVisit();

    cy.get("#posts").should("have.length", 1);
  });
});
