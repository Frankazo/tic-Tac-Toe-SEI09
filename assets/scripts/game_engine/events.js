'use strict'
// import acces to store and ui in order to access variables and functions
const store = require('../store')
const ui = require('./ui')
const api = require('./api')

// function tha compare values of the play vs the winning combination
const checkWinner = function () {
  // will return true or false if any of the combos meet the winnig criteria or it's a tie
  if (store.combinations.some(combo => combo.every(v => store.p[v] === 'X') || combo.every(v => store.p[v] === 'O'))) {
    ui.gameFinished(store.currentLetter)
  } else if (store.count === 9) {
    ui.gameFinished('Nodoby')
  }
}

// function that changes the value of an specific spot in the board
const onPlay = function (event) {
  // to prevent the page from reloading when pressing the button i use preventDefault()
  event.preventDefault()
  // to get the id of the button clicked we use event.target.id and assign it to buttonId
  store.buttonId = event.target.id

  // condition to check if and empty button has been press
  if ($('#' + store.buttonId).html() === '') {
    // counter to keep track of plays and select between X or O
    store.count += 1
    if (store.count % 2 === 0) {
      store.currentLetter = 'O'
      $('.message1').text('next move: Player X')
    } else {
      store.currentLetter = 'X'
      $('.message1').text('next move: Player O')
    }
    $('#' + store.buttonId).html(store.currentLetter)
    store.p[store.buttonId] = store.currentLetter

    checkWinner()
    // update the API when a button is pressed
    api.newMove()
      .then(ui.newMovesuccesfull)
      .catch(ui.newMovefailure)
    // check for a winner
  } else {
    $('.message2').text('invalid movement')
  }
}

// New game cleans the board and creates a new game in the API
const onNewGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.newGamesuccesfull)
    .catch(ui.newGamefailure)
}

// check player Stats
const onStats = function (event) {
  event.preventDefault()
  api.gameStats()
    .then(ui.gameStatssuccesfull)
    .catch(ui.gameStatsfailure)
}

const onOldGame = function (event) {
  event.preventDefault()
  const gameid = event.target.id
  api.showGame(gameid)
    .then(ui.showGamesuccesfull)
    .catch(ui.showGamefailure)
}

module.exports = {
  onPlay,
  onNewGame,
  onStats,
  onOldGame
}
