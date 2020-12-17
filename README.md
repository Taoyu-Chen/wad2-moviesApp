# Assignment 1 - ReactJS app.

Name: Taoyu Chen

## Features.

 + Feature 1 - Login and register using firebase
 + Feature 2 - Private router - user cannot access top_rated, keywords and similar page until login
 + Feature 3 - Movie Keywords - get a list of movie keywords when  click "Movie Keywords" button 
 + Feature 4 - Similar Movies -  get a list of similar movies when  click "Similar Movies" button 
 + Feature 5 - Top Rated Movie - have a quick look about the top 20 movies for user
 + Feature 6 - Using redux to store data and get data from store
 + Feature 7 - Using material-ui to rewrite the movie list page

## Setup requirements (If required).

- npm install - dependencies should be included in the .json file
- npm start

Need Some firebase parameter and add in .env and cypress.env.json: 

REACT_APP_FIREBASE_API_KEY=AIzaSyDmjZNiGA92UUc_Zpx3qJJ0h62Gc3tmYNM
REACT_APP_FIREBASE_AUTH_DOMAIN=moivesapp.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL=https://moivesapp.firebaseio.com
REACT_APP_FIREBASE_PROJECT_ID=moivesapp
REACT_APP_FIREBASE_STORAGE_BUCKET=moivesapp.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=1073201749961
REACT_APP_FIREBASE_APP_ID=1:1073201749961:web:d8766f5e669b459af3d218
REACT_APP_FIREBASE_MEASUREMENT_ID=G-F8NRNH8492

## API Data Model.

+ https://api.themoviedb.org/3/movie/${*id*}/similar- get similar movies on a specific movie. 
+ https://api.themoviedb.org/3/movie/${*id*}/keywords - get keywords of movies on a specific movie.
+ https://api.themoviedb.org/3/movie/top_rated - get top rated movies 

## App Design.

### Component catalogue (If required).

![][stories]

### UI Design.

![][login]	

>Shows Login Page and you can type email and password to login.

![][signup]



>Shows Register Page and you can type email, password and comfirm password  to register, then you can use email and  password to login.

![][topratedmovie]

>Show top rated movie list. Clicking the 'Movie Keywords' button will display movie details with keywords. Clicking the 'Movie Similar' button will display similar movie list.

![][similarmovie]



> Show similar movie list. Clicking the 'Movie Keywords' button will display movie details with keywords. Clicking the 'Movie Similar' button will display similar movie list.

![][movieKeywords]

> Show detailed information and keywords on a movie.







## Routing.



+ /keywords/:id (private) - displays the movie details with keyword
+ /similar/:id (private) - displays the similar 20 movies
+ /signup - displays signup page.
+ /login - displays login page.
+ /movies/top_rated -displays the top 20 movies

### Data hyperlinking.

![][TopRatedMovielink]

> Clicking a "movie keywords" button causes the display of that movie's details and keywords.
>
> Clicking a "similar movies" button causes the display of that movie's similar movies.
>
> Clicking a "Logout" button causes the display of login page and cannot access private page

![][SimilarMovielink]

>Clicking a "movie keywords" button causes the display of that movie's details and keywords.
>
>Clicking a "similar movies" button causes the display of that movie's similar movies.
>
>Clicking a "Logout" button causes the display of login page and cannot access private page

## Independent learning (If relevant).

Material UI - The UI of movie list page and chip component in keywords page uses the Material UI Reference: https://material-ui.com/getting-started/installation/

Redux - it is used to store data to store and get data from store. Reference: https://coding.imooc.com/class/229.html (No react-redux when I was studying)

Redux-persist - Cache the data in the store in the browser to reduce data requests. Reference:https://www.npmjs.com/package/redux-persist

Firebase: Use third-party certification, I create login, register and logout function. Reference:https://github.com/WebDevSimplified/React-Firebase-Auth

[login]: ./public/login.png
[signup]: ./public/signup.png
[similarmovie]: ./public/SimilarMoviePage.png
[topratedmovie]: ./public/TopRatedMovie.png
[movieKeywords]: ./public/MovieDetailWithKeywords.png
[TopRatedMovielink]: ./public/TopRatedMovie_link.jpg
[SimilarMovielink]: ./public/SimilarMoviePage_link.jpg

