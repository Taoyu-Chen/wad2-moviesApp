"use strict";

var movieId = null;
var movie;
var reviews;
describe("Movie Details Page", function () {
  before(function () {
    cy.request("https://api.themoviedb.org/3/discover/movie?api_key=".concat(Cypress.env("TMDB_KEY"), "&language=en-US&include_adult=false&include_video=false&page=1")).its("body").then(function (response) {
      return response.results[2].id;
    }).then(function (arbitraryMovieIdignored) {
      movieId = arbitraryMovieIdignored;
      return cy.request("https://api.themoviedb.org/3/movie/".concat(movieId, "?api_key=").concat(Cypress.env("TMDB_KEY"))).its("body");
    }).then(function (movieDetails) {
      movie = movieDetails;
      return movieDetails.id;
    });
  });
  beforeEach(function () {
    cy.visit("/");
    cy.get(".card").eq(2).find("img").click();
  });
  it("should display movie title in the page header", function () {
    cy.get("h2").contains(movie.title);
  });
  it("should display the movie's details", function () {
    cy.get("h4").contains("Overview");
    cy.get("h4").next().contains(movie.overview);
    cy.get("ul").eq(1).within(function () {
      cy.get("li").eq(0).contains("Runtime");
      cy.get("li").eq(1).contains(movie.runtime);
      cy.get("li").eq(2).contains("Release Date");
      cy.get("li").eq(3).contains(movie.release_date);
    });
  });
  it("should display the Home icon with the correct URL value", function () {
    cy.get(".fa-home").parent().should("have.attr", "href").should("include", movie.homepage);
  });
  it("should display the the movie poster with the correct URL value", function () {
    cy.get("img").should("have.attr", "src").should("include", movie.poster_path);
  });
});