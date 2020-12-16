let movies;    // List of movies from TMDB
const movieId = 424;
// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Home Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        movies = response.results
      })
  })
  beforeEach(() => {
    cy.visit("/movies/top_rated")
    cy.wait(10000)
    cy.get('span[class="MuiTouchRipple-root"]').eq(14).click();
  });


  describe("Base test", () => {
    it.only("displays page header", () => {
      cy.get("h2").contains("Similar Movies");
      cy.get(".badge").contains(20);
    });
  });
  describe("Filtering", () => {
    describe("By movie title", () => {
      it.only("should display movies with 'an' in the title", () => {
        cy.wait(20000)
        const searchString = 'an'
        const matchingMovies = filterByTitle(movies, searchString);
        cy.get('[data-cy=listFilter]').type(searchString);
        cy.get('[data-cy=moviecard]').should("have.length", matchingMovies.length);
        cy.get('[data-cy=moviecard]').each(($card, index) => {
          cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingMovies[index].title);
        });
      })
      it("should display movies with 'the' in the title", () => {
        const searchString = 'the'
        const matchingMovies = filterByTitle(movies, searchString);
        cy.get('[data-cy=listFilter]').type(searchString);
        cy.get('[data-cy=moviecard]').should("have.length", matchingMovies.length);
        cy.get('[data-cy=moviecard]').each(($card, index) => {
          cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingMovies[index].title);
        });
      })
      it("should display are no matches movies with 'xyz' in the title", () => {
        const searchString = "xyz";
        const matchingMovies = filterByTitle(movies, searchString);
        cy.get('[data-cy=listFilter]').type(searchString);
        cy.get('[data-cy=moviecard]').should("have.length", matchingMovies.length);
        expect(matchingMovies.length).to.equals(0);
        
      })
    })
    describe("By movie genre", () => {
      it("should display movies with the specified genre only", () => {
        const selectedGenreId = 36;
        const matchingMovies = filterByGenre(movies, selectedGenreId);
        cy.get('[data-cy=select]').click();
        cy.get('ul[class="MuiList-root MuiMenu-list MuiList-padding"]').first().click();
        cy.get('[data-cy=moviecard]').should("have.length", matchingMovies.length);
        cy.get('[data-cy=moviecard]').each(($card, index) => {
          cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingMovies[index].title);
        });
      });
    });
    describe("Both by movie title and genre", () => {
      it("should display movies with the specified text and genre", () => {
        const searchString = "ann";
        const matchingMovies = filterByTitle(movies, searchString);
        const selectedGenreId = 36;
        const matchingMovies2 = filterByGenre(matchingMovies, selectedGenreId);
        cy.get('[data-cy=listFilter]').type(searchString);
        cy.get('[data-cy=select]').click();
        cy.get('ul[class="MuiList-root MuiMenu-list MuiList-padding"]').first().click();
        cy.get('[data-cy=moviecard]').should("have.length", matchingMovies.length);
        cy.get('[data-cy=moviecard]').each(($card, index) => {
          cy.wrap($card)
            .find(".card-title")
            .should("have.text", matchingMovies2[index].title);
        });
      });
    });
  })
})