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
  $('.message').text('')
  $('.message2').text('')
  $('.message1').text('Player X first').removeClass('hide')
  $('#buttons').removeClass('hide')
  $('#sign').removeClass('hide')
}
const newGamefailure = function (data) {
  $('.message').text('Unable to start a new game')
}

// when game is finished stop user from keep playing and displays winner
const gameFinished = function (y) {
  $('.message').text(y + ' won')
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).disabled = true
  }
  store.bool = true
}

// if a move is succesfull update the message
const newMovesuccesfull = function (data) {
  console.log(data)
  $('#' + store.buttonId).html(store.currentLetter)
  // if (store.currentLetter === 'X') {
  //   $('.message1').text('next move: Player O')
  // } else {
  //   $('.message1').text('next move: Player X')
  // }
  if (store.bool === true) {
    $('.message1').addClass('hide')
  }
  // logic of what player is playing
  // condition that avoids the player from playing in the same spot
  // if ($('#' + store.buttonId).html() === '') {
  //   $('#' + store.buttonId).html(store.currentletter)
  // }
  $('.message2').text('')
}
const newMovefailure = function (data) {
  $('.message').text('error')
}

// show stats of user
const gameStatssuccesfull = function (data) {
  $('.message2').text('Total Games: ' + data.games.length)
}
const gameStatsfailure = function (data) {
  $('.message2').text('failure getting stats')
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
