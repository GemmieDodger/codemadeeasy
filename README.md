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

For reference in external folder. Please see email.

## Deployment

The deployed version can be accessed via [this link](https://secret-waters-97276.herokuapp.com/ ). 

This code has been deployed using Heroku. I have not used continuous deployment because over the course of this week, it will be updated substantially. My previous experience is that Heroku puts a block on automatic pushes if their quota is exceeded and it is noted that after completion, this code will need to be forked by businesses and adapted. This is a demo.

*If you receive an error page*, please refresh the URI. It is likely that the app has been put to sleep and needs awakening.

DISCLAIMERS: I occasionally run into Error R14 (Memory quota exceeded). This will need further research, but I have managed to make this more stable by removing Jest, Cypress, some codemirror and styled components. 

Please note that this link works on the 28th January, but Heroku will go to sleep after a certain number of weeks so may need a refresh. It is also likely that at some point I will take this down after 1 month, and therefore will not be able to be accessed at a later date.

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

### CSS
React-bootstrap should be the key implementation
The government defaults file should also be utilised for blanket app styling.

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

## End user information
### New website utilising this template
Create a firebase app
Set up a web app in firebase firestore
Switch on authentication for both email/password and github
Github: settings / dev settings
Add configeration from firebase into firebase.js in your new form

### Admin

Once logged in, an admin should navigate to admin. Click create quiz to add a quiz. Add and update questions within edit section of that newly created quiz (via. admin page).

This data is stored in firebase.

NOTE: Data for blocks is currently stored within the blocks page. This will be resolved at a later date and a task has be raised.





