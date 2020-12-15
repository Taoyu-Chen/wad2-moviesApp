
describe("Login Page ", () => {
  beforeEach(() => {
    cy.visit("/login")
  });
  describe("Private route Test", () => {
    it("should not display top rated movies when logout", () => {
      cy.visit("/movies/top_rated")
      cy.url().should("include", `/login`);     
    });
    it("should not display movie keywords when logout", () => {
      cy.visit("/movies/top_rated")
      cy.url().should("include", `/login`);     
    });
    it("should not display similar movies when logout", () => {
      cy.visit("/movies/top_rated")
      cy.url().should("include", `/login`);     
    });
  });

  describe("Firebase Login", () => {
    it("displays Log in page", () => {
      cy.get("h2").contains("Log In");
      cy.url().should("include", `/login`);
    });
  });

  describe("Login execution", () => {
    describe("Enter email and password", () => {
      it("should display top rate page when email and password are correct", () => {
        const emailString = '20091612@wit.ie';
        const passwordString = '123456';
        cy.get('[data-cy=email]').clear().type(emailString);
        cy.get('[data-cy=password]').clear().type(passwordString);
        cy.get('[data-cy=login]').click();
        cy.url().should("include", `/movies/top_rated`);
      })
      it("should display alert when email and password are incorrect", () => {
        const emailString = '20091612@wit.ie';
        const passwordString = '678123';
        cy.get('[data-cy=email]').clear().type(emailString);
        cy.get('[data-cy=password]').clear().type(passwordString);
        cy.get('[data-cy=login]').click();
        cy.get('[data-cy=failalert]').should('contain', 'Failed to log in')
      })
      it("should signup page when click signup button", () => {
        cy.get('[data-cy=signup]').click();
        cy.url().should("include", `/signup`);
      })
    })
  })
})