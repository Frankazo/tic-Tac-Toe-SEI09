'use strict'
// import acces to store and ui in order to access variables and functions
const store = require('../store')
const ui = require('./ui')
const api = require('./api')

// function tha compare values of the play vs the winning combination
const checkWinner = function (id, letter) {
  let bool = false
  // will return true or false if any of the combos meet the winnig criteria or it's a tie
  if (store.combinations.some(combo => combo.every(v => store.p[v] === 'X') || combo.every(v => store.p[v] === 'O'))) {
    ui.gameFinished(letter)
    bool = true
  } else if (store.count === 9) {
    ui.gameFinished('Nodoby')
    bool = true
  }
  // update the API when a button is pressed
  api.newMove(id, store.currentLetter, bool)
    .then(ui.newMovesuccesfull)
    .catch(ui.newMovefailure)
}

// function that changes the value of an specific spot in the board
const onPlay = function (event) {
  // to prevent the page from reloading when pressing the button i use preventDefault()
  event.preventDefault()
  // to get the id of the button clicked we use event.target.id and assign it to buttonId
  const buttonId = event.target.id

  // condition to check if and empty button has been press
  if ($('#' + buttonId).html() === '') {
    // counter to keep track of plays
    store.count += 1
    // condition to check if we still have space in the board
    // if we have space then check turn
    // change between players
    if (store.count % 2 === 0) {
      store.currentLetter = 'O'
    } else {
      store.currentLetter = 'X'
    }
    // now we send that id to ui.changeValue to change the value of that particular button
    ui.changeValue(buttonId, store.currentLetter)
    store.p[buttonId] = store.currentLetter
    checkWinner(buttonId, store.currentLetter)
  }
}

// New game cleans the board and creates a new game in the API
const onNewGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.newGamesuccesfull)
    .catch(ui.newGamefailure)
}

module.exports = {
  onPlay,
  onNewGame
}
