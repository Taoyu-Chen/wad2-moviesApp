"use strict";

var movies;
var movieId = 497582; // Enola Holmes movie id

var reviews;
describe("Navigation", function () {
  before(function () {
    cy.request("https://api.themoviedb.org/3/discover/movie?api_key=".concat(Cypress.env("TMDB_KEY"), "&language=en-US&include_adult=false&include_video=false&page=1")).its("body").then(function (response) {
      movies = response.results;
    });
    cy.request("https://api.themoviedb.org/3/movie/".concat(movieId, "/reviews?api_key=").concat(Cypress.env("TMDB_KEY"))).its("body").then(function (response) {
      console.log(response);
      reviews = response.results;
    });
  });
  describe("From the home page", function () {
    beforeEach(function () {
      cy.visit("/");
    });
    it("should navigate to the movie details page and change browser URL", function () {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", "/movies/".concat(movies[1].id));
      cy.get("h2").contains(movies[1].title);
    });
    it("should allow navigation from site header", function () {
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.url().should("include", "/favorites");
      cy.get("h2").contains("Favorite Movies");
      cy.get("nav").find("li").eq(1).find("a").click();
      cy.url().should("not.include", "/favorites");
      cy.get("h2").contains("Upcoming Movies");
      cy.get("nav").find("li").eq(2).find("a").click();
      cy.get("nav.navbar-brand").find("a").click();
      cy.url().should("not.include", "/favorites");
      cy.get("h2").contains("No. Movies");
    });
  });
  describe("From the Movie Details page ", function () {
    beforeEach(function () {
      cy.visit("/movies/".concat(movieId));
    });
    it("should change browser URL when show/hide reviews is clicked", function () {
      cy.contains("Show Reviews").click();
      cy.url().should("include", "/movies/".concat(movieId, "/reviews"));
      cy.contains("Hide Reviews").click();
      cy.url().should("not.include", "/movies/".concat(movieId, "/reviews"));
    });
    it("navigate to the full review page when a 'Full Review' link is clicked", function () {// TODO
    });
  });
  describe("From the Favorites page", function () {
    beforeEach(function () {
      cy.visit("/");
      cy.get(".card").eq(0).find("button").click();
      cy.get("nav").find("li").eq(2).find("a").click();
    });
    it("should navigate to the movies detail page and change the browser URL", function () {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", "/movies/".concat(movies[0].id));
      cy.get("h2").contains(movies[0].title);
    });
  });
  describe("The Go Back button", function () {
    beforeEach(function () {
      cy.visit("/");
    });
    it("should navigate from home page to movie details and back", function () {
      cy.get(".card").eq(1).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("not.include", "/movies");
      cy.get("h2").contains("No. Movies");
    });
    it("should navigate from favorites page to movie details and back", function () {// TODO
    });
  });
});