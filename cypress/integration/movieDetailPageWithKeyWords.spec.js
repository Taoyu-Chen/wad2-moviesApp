let movieId = 724089
let movie;
let keywords;
describe("Movie Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        movie = response
      })
    
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        keywords = response.keywords
      })
  });
  beforeEach(() => {
    cy.visit(`/movies/top_rated`);
    cy.get('[data-cy=keywordsButton]').eq(1).click();
  });

  it("should display movie title in the page header", () => {
    cy.wait(5000);
    cy.get("h2").contains(movie.title);
  });
  it("should display the movie's details", () => {
    cy.get("h4").contains("Overview");
    cy.get("h4").next().contains(movie.overview);
    cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("Runtime");
        cy.get("li").eq(1).contains(movie.runtime);
        cy.get("li").eq(2).contains("Release Date");
        cy.get("li").eq(3).contains(movie.release_date);
      });
  });
  it("should display the Home icon with the correct URL value", () => {
    cy.get(".fa-home")
      .parent()
      .should("have.attr", "href")
      .should("include", movie.homepage);
  });
  it("should display the the movie poster with the correct URL value", () => {
    cy.get("img")
      .should("have.attr", "src")
      .should("include", movie.poster_path);
  });
  it("should display the the movie keyword", () => {
    cy.get('[data-cy=keyword]').contains(keywords[0].name)
  });
});