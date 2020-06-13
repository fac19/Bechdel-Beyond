[![Build Status](https://travis-ci.com/fac19/Bechdel-Beyond.svg?branch=master)](https://travis-ci.com/fac19/Bechdel-Beyond) [![codecov](https://codecov.io/gh/fac19/Bechdel-Beyond/branch/master/graph/badge.svg)](https://codecov.io/gh/fac19/Bechdel-Beyond)

# Bechdel & Beyond :movie_camera:

A new way to discover, review & share movies that pass the Bechdel Test and go beyond...

![](https://i.imgur.com/AoH51TY.png)

## What is the Bechdel Test? :female_sign:

![image alt](https://media.giphy.com/media/J2n6TpRkDnBmYJeSG5/giphy.gif)

This simple test, also known as the Bechdel-Wallace test, was created by the cartoonist Alison Bechdel and her friend Liz Wallace. It is a measure of the representation of women in fiction.

**A movie passes when:**

1. The movie has to have **at least two women in it**
1. who talk to **each other**
1. about something **other than a man.**

## What is Beyond? :rocket:

The Bechdel Test is a useful but limited tool as it doesn't tell the whole story. The beyond part of our review asks the user to think about other criteria such as:

- How many women are in the cast/crew?
- What percentage of the dialogue do they speak?
- Do they drive their choices?

## Features 🔎

Our project uses multiple API's but we wanted to build on their limitations:

- One of our core features is to give users the ability to share their own opinion on the gender representation in film.
- Beyond is our way of elabourating on the existing Bechdel rating.
- From these ideas we provide a web service in which users can find films that dont portray a frustrating gender imbalance, both on and off camera.

## How to use

1. Clone this repo
2. Run `npm i`
3. Start the server with `npm start`
4. Run tests with `npm test`
5. Run cypress tests with `cy:open` (server must be running at the same time)

## Movie Page

![](https://i.imgur.com/550mCUF.png)

## Tech Used

- React
- Jest
- CodeCov
- Travis
- Cypress to test [user journeys](./docs/user-journeys.md)

## APIs used in the backend

**You can find the backend API for this app [here](https://github.com/fac19/Bechdel-Beyond-backend)**

- [The Movie DB API](https://www.themoviedb.org/documentation/api) was used to get a list of films. Search was done by year and 1997 was selected since Titanic was always comming up in our search for APIs to use.
- [The Movie Open Database](http://www.omdbapi.com/) was used to get film details for a given film title
- [The Movie DB API](https://www.themoviedb.org/documentation/api) was used again to get cast and crew information for a given film id (provided by the first query)
- [Bechdel Test Movie List](https://bechdeltest.com/api/v1/doc) was used to get Bechdel test reviews for a given film title

## Future developments

With more time we would:

- Add a user page - user can edit their details, see all their reviews and edit/delete them
- Filter function so users can filter by gender ratio/ director's gender etc.
- Add playlist feature - user can create playlists of movies they like and view playlists created by other users
- Use infographics to display the gender parity data
- User testing with the final product

## Credits

![](https://media.giphy.com/media/xUNemGKfpKwssvKdIA/giphy.gif)

Built by:

- [Chloe](https://github.com/chloeh24) - UX/UI
- [Ako](https://github.com/akomiqaia) - DevOps
- [James](https://github.com/jamesj-0) - Scrum
- [Gio](https://github.com/glrta) - QA

Planning was done on [Notion](https://www.notion.so/Bechdel-and-beyond-fcacd0381bb04b5089cdb0062609fdba) and [Miro](https://miro.com/app/board/o9J_ks1wjnI=/). Prototyping was done on [Figma](https://www.figma.com/file/ZSdbORvFSb5z5jTmqhZnd6/Bechdel?node-id=0%3A1)
