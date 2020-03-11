'use strict'
// import acces to store and ui in order to access variables and functions
const store = require('../store')
const ui = require('./ui')

// function tha compare values of the play vs the winning combination
const checkWinner = function (letter) {
  for (let i = 0; i < 8; i++) {
    if (store.combinations[i].every(v => store.p[v] === 'X') || store.combinations[i].every(v => store.p[v] === 'O')) {
      ui.gameFinished(letter)
    }
  }
}

// function that changes the value of an specific spot in the board
const onPlay = function (event) {
  // to prevent the page from reloading when pressing the button i use preventDefault()
  event.preventDefault()

  // to get the id of the button clicked we use event.target.id and assign it to buttonId
  const buttonId = event.target.id
  // condition to check if button has ben press
  if ($('#' + buttonId).html() === '') {
    // counter to keep track of plays
    store.count += 1
    // condition to check if we still have space in the board
    if (store.count <= 9) {
      // if we have space then check turn
      if (store.count % 2 === 0) {
      // now we send that id to ui.changeValue to change the value of that particular button
        ui.changeValueX(buttonId)
        store.p[buttonId] = 'X'
        checkWinner('X')
      } else {
        ui.changeValueO(buttonId)
        store.p[buttonId] = 'O'
        checkWinner('O')
      }
      // if no space and no winner then is a Tie
    } else {
      ui.gameFinished('Tie')
    }
  }
}

// New game cleans the board and eventually will create a new game in the API
const onNewGame = function (event) {
  event.preventDefault()
  ui.newGame()
}

module.exports = {
  onPlay,
  onNewGame
}
