"use strict";

var movies; // List of movies from TMDB
// Utility functions

var filterByTitle = function filterByTitle(movieList, string) {
  return movieList.filter(function (m) {
    return m.title.toLowerCase().search(string) !== -1;
  });
};

var filterByGenre = function filterByGenre(movieList, genreId) {
  return movieList.filter(function (m) {
    return m.genre_ids.includes(genreId);
  });
};

describe("Home Page ", function () {
  before(function () {
    // Get movies from TMDB and store in movies variable.
    cy.request("https://api.themoviedb.org/3/discover/movie?api_key=".concat(Cypress.env("TMDB_KEY"), "&language=en-US&include_adult=false&include_video=false&page=1")).its("body") // Take the body of HTTP response from TMDB
    .then(function (response) {
      movies = response.results;
    });
  });
  beforeEach(function () {
    cy.visit("/");
  });
  describe("Base test", function () {
    it("displays page header", function () {
      cy.get("h2").contains("No. Movies");
      cy.get(".badge").contains(20);
    });
  });
  describe("Filtering", function () {
    describe("By movie title", function () {
      it("should display movies with 'p ' in the title", function () {
        var searchString = 'p';
        var matchingMovies = filterByTitle(movies, searchString);
        cy.get("input").clear().type(searchString);
        cy.get(".card").should("have.length", matchingMovies.length);
        cy.get(".card").each(function ($card, index) {
          cy.wrap($card).find(".card-title").should("have.text", matchingMovies[index].title);
        });
      });
      it("should display movies with 'o' in the title", function () {
        var searchString = "o";
        var matchingMovies = filterByTitle(movies, searchString);
        cy.get("input").clear().type(searchString);
        cy.get(".card").should("have.length", matchingMovies.length);
        cy.get(".card").each(function ($card, index) {
          cy.wrap($card).find(".card-title").should("have.text", matchingMovies[index].title);
        });
      });
      it("should display are no matches movies with 'xyz' in the title", function () {
        var searchString = "xyz";
        var matchingMovies = filterByTitle(movies, searchString);
        cy.get("input").clear().type(searchString);
        cy.get(".card").should("have.length", matchingMovies.length);
        expect(matchingMovies.length).to.equals(0);
      });
    });
    describe("By movie genre", function () {
      it("should display movies with the specified genre only", function () {
        var selectedGenreId = 35;
        var selectedGenreText = "Comedy";
        var matchingMovies = filterByGenre(movies, selectedGenreId);
        cy.get("select").select(selectedGenreText);
        cy.get(".card").should("have.length", matchingMovies.length);
        cy.get(".card").each(function ($card, index) {
          cy.wrap($card).find(".card-title").should("have.text", matchingMovies[index].title);
        });
      });
    });
  });
});