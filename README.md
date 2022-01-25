# Code made easy template app

## Table of Contents
- [Description](#Description)
- [Planning](#Planning)
- [Deployment](#Deployment)
- [Useage](Useage)
- [Build-locally](Build-locally)
- [Testing](Testing)


## Description
A web application suitable for helping people learn programming. This will be available as a deployed package for demo purposes. The purpose of the application is to teach anyone the fundamentals of computer programming. This is a concept application that we have been asked to produce and is aimed at absolute beginners and is not be language specific. It should include basic coding concepts and provide an interactive learning experience for the user. Partners require a new and interactive approach to teaching programming. This concept is built for our partners to take it forward. An essential requirement is the ability to practice programming using interactive practice areas. This will include the core concepts that need to be covered within the application. 

- firebase
- javascript
- react
- react-bootstrap
- codemirror
- heroku

## Planning

Please see 'documentation/planning' folder

## Deployment

The deployed version can be accessed via [this link](https:..........). 

This code has been deployed using Heroku. I have not used continuous deployment because over the course of this week, it will be updated substantially. My previous experience is that Heroku puts a block on automatic pushes if their quota is exceeded and it is noted that after completion, this code will need to be forked by businesses and adapted. This is a demo.

*If you receive an error page*, please refresh the URI. It is likely that the app has been put to sleep and needs awakening.

DISCLAIMER: Please note that this link works on the 28th January, but will go to sleep after a certain number of weeks and therefore not be able to be accessed at a later date.

## Useage

- A logged out user can: 
  - Play a quiz 
  - Receive their score after playing the quiz.
- A logged in player can:
  - Play a quiz
  - Receive their score after playing the quiz.
  - Create a quiz
  - Create a new question in a current or newly created quiz
  - Update a quiz question
  - Delete a quiz question


## Build locally

- Please fork the repository and clone to your machine
- Use `npm i` to install dependencies
- Use `npm start` to launch in development mode
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Testing
Please see demo video in 'codemadeeasy/documentation/Testing/TestingUnitAndE2E'.
### E2E
DISCLAIMER: For E2E tests to work, currently you need to create a "Test" quiz in production. This is not ideal, but due to the tight timeline it is required. Remember to delete after use.

- npm start
- Create a new Quiz called "Test"
- Open a new terminal in VSC
- npm cypress install
- npx cypress open
- Click test to run
- Expect an error - Login to your account
- Re-run tests
- View completed integration tests
- Delete test quiz
### Unit
- npm run test
- View completed unit tests




