CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Wireframes
 * User Stories
 * Planning and Development
 * Future features
 * Technologies
 * Creator

 INTRODUCTION
 ------------

  This is the First project for Software engineering Immersive SEI09.
  Tic-tac-toe is a game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

  The project is base on building a Webapp that runs the game, create the game from scratch, follow all the requirement and deploy a working version on Github.

  WIREFRAMES
  ----------
  Initial Stage
  - ![alt text](https://github.com/Frankazo/tic-Tac-Toe-SEI09/blob/master/assets/images/Initial%20Stage.png?raw=true "Initial Stage")

  - Sign In or Sign Up Stage
  - ![alt text](https://github.com/Frankazo/tic-Tac-Toe-SEI09/blob/master/assets/images/Sign%20In%20or%20Sign%20Up%20Stage.png?raw=true)

  - New Game Stage
  - ![alt text](https://github.com/Frankazo/tic-Tac-Toe-SEI09/blob/master/assets/images/New%20Game%20Stage.png?raw=true)

  - Finished Game Stage
  - ![alt text](https://github.com/Frankazo/tic-Tac-Toe-SEI09/blob/master/assets/images/Finished%20Game%20Stage.png?raw=true)

  - Glossary
  - ![alt text](https://github.com/Frankazo/tic-Tac-Toe-SEI09/blob/master/assets/images/Glossary.png?raw=true)

  USER STORIES
  ------------
    - As a 'new user', I want 'sign up' so that 'I can play'.
    - As a 'registered user', I want 'click play' so that 'I can play'.
    - As a 'playing user', I want 'Put X or O to' so that 'I can win'.
    - As a 'Wining user', I want 'click play again' so that 'I can play again'.
    - As a 'Wining user', I want 'click Stats' so that 'I can see my stats'.
    - As a 'registered user', I want 'click change Pass' so that 'change my password'.

  PLANING AND DEVELOPMENT
  -----------------------

  ### Game Logic

  - Simple 3*3 game board
  - Click handler for a click on the game board
  - Clicks on a valid space add their X or O
  - Board representation in JS
  - Keep track of the current player
  - Current player rotates between X and O
  - Logic to check Board for Winner
  - Create and Arrays with the 8 possible wining combinations
  - After each play check Board representation vs wining combinations for 'X' or 'O'
          (store.combinations.some(combo => combo.every(v => store.board[v] === 'X') || combo.every(v => store.board[v] === 'O')))
  - If this is false in the last play then is a Draw

  ### Game UI

  - Update the game engine when the game board is updated
  - Message user when the turn changes
  - Message user when clicks on an invalid space
  - Message user when the game is over (win or draw)
  - Not allow to add an X or O to any spaces after the game is over

  ### Authentication and uses

  - [api-token-auth](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-token-auth)
  - Sign Up
  - Sign In
  - Change Password
  - Sign Out
  - Success or failure messages for all API calls

  ### API

  - [jquery-ajax-crud](https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-crud)
  - Create Game, start new game
  - Update Game, play the game
  - Get Games

  FUTURE FEATURES
  ---------------
  - AI Bot: User can play against a computer AI.
  - Responsive Design: Functionality on mobile experience.
  - Multiplayer: Different logged in users can compete from different devices.

  TECHNOLOGIES
  ------------
    - html
    - Scss
    - javascript
    - bootstrap

  CREATOR
  -------
  - [Frank Luis-Ravelo](https://www.linkedin.com/in/franklr/)
