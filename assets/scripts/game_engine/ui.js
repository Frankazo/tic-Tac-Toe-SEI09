'use strict'
const store = require('../store')

// Clean the board and sets all the variable
const newGamesuccesfull = function (data) {
  for (let i = 0; i < 9; i++) {
    $('#' + i).html('')
    document.getElementById(i).disabled = false
  }
  store.p = ['', '', '', '', '', '', '', '', '']
  store.count = 0
  store.currentLetter = ''
  store.game = data.game
  store.bool = false

  $('.message2').text('')
  $('.message1').text('Player X first').removeClass('hide')
  $('#buttons').removeClass('hide')
  $('#sign').removeClass('hide')
  $('#sMessage').text('Game created')
}
const newGamefailure = function (data) {
  $('#sMessage').text('Unable to start a new game')
}

// when game is finished stop user from keep playing and displays winner
const gameFinished = function (y) {
  $('.message1').text(y + ' won')
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).disabled = true
  }
  store.bool = true
}

// if a move is succesfull update the message
const newMovesuccesfull = function () {
  $('#' + store.buttonId).html(store.currentLetter)

  $('.message2').text('')
}
const newMovefailure = function (data) {
  $('#sMessage').text('Error making a move').removeClass('success').addClass('failure')
}

// show statistics to the user
const gameStatssuccesfull = function (data) {
  $('#sMessage').text('Succesfully retrieve statistics').removeClass('failure').addClass('success')
  $('.message2').text('Total Games: ' + data.games.length)
}
const gameStatsfailure = function (data) {
  $('#sMessage').text('failure getting stats').removeClass('success').addClass('failure')
}

module.exports = {
  newGamesuccesfull,
  gameFinished,
  newGamefailure,
  newMovesuccesfull,
  newMovefailure,
  gameStatsfailure,
  gameStatssuccesfull
}
