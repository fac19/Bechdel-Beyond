# User journeys

# Sign Up

### As a user I want to register on the platform. #2

- [x] Form page to add user details: name, email, password
- [x] Sign up form validation and accessibility
- [x] Sign up post request to server
- [x] Sign up handler to deal with Post request.
- [ ] Sign up feedback page after form submitted
- [x] Sign up tests
- [x] Sign up error handling if user already exists
- [x] Sign up: cookies
- [x] Sign up: JWT

# Sign In

### As a user I want to be able to sign in. #3

- [x] Sign in form: email, password
- [x] Sign in form validation and accessibility
- [x] Sign in tests
- [x] Sign in handler for db query
- [x] Sign in query from database
- [x] Sign in error handling (if user doesn't exist)
- [x] Sign in Cookies
- [x] Sign in JWT

# Learn

### As a user I want to know what the Bechdel test is #4

- [x] Create front end page to display our information on the Bechdel test.
- [x] Create a carousel component the user can swipe over that displays the data, updating the text and styling to match the prototype.
- [x] test to see if the react dom is creating the right elements and displaying the correct information.

# Find a film

## Browse Films on Homepage

### As a User I want to be able to see a lot of films once #5

- [x] Display all movie data from database on screen.
- [x] Display movie images on css grid (2 across on mobile)

### As a user I want to be able to see which films pass the Bechdel Test. #7

- [x] fetch bechdel test rating from the database
- [x] Display bechdel test ratings on the movie image

# Filter films

## Filter the films by different parameters

- [ ] Create filter component
- [ ] Show categories on page
- [ ] get request to db by parameters
- [ ] display filtered results

### As a user I want to see a list of the top rated films #6

- [ ] Filter function to show top rated films first
- [ ] Filter button in search bar

# Get additional Information

- [x] Click on a movie to see extra film info

### As a user I want to see a good synopsis on a film page. #8

- [x] fetch request to the existing API to get synopsis key
- [x] create REACT component to display the text on the movie page.
- [x] Test to see if the correct text / movie title is displayed in the react DOM.

# Rate a film

## Use a form to rate the film

### As a user, I want an easy-to-use form to give feedback on if a film passes the Bechdel test #9

- [x] 3 pages with bechdel questions and tick/cross button
- [x] Redirects to next question after a button is pressed
- [x] Beyond page with emojis, comment box and submit button
- [x] POST request submits form data to API
- [x] add rating information to database
- [x] add review/comments to reviews film page

### As a user, I want to spend a very short amount of time giving this feedback #10
