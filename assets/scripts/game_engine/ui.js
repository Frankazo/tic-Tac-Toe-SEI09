'use strict'
const store = require('../store')
const changeValue = function (id, letter) {
  // console.log('working in ui')
  // logic of what player is playing
  // condition that avoids the player from playing in the same spot
  if ($('#' + id).html() === '') {
    $('#' + id).html(letter)
  }
}

// for now this just cleans the board, eventually it will create a new game in the api
const newGamesuccesfull = function (data) {
  for (let i = 0; i < 9; i++) {
    $('#' + i).html('')
    document.getElementById(i).disabled = false
  }
  $('.message').text('')
  store.p = ['', '', '', '', '', '', '', '', '']
  store.count = 0
  store.currentLetter = ''
  store.game = data.game
  // console.log(data.game)
}
const newGamefailure = function (data) {
  $('.message').text('Unable to start a new game')
}

// when game is finished stop user from keep playing and displays winner
const gameFinished = function (y) {
  // console.log(y + ' won')
  $('.message').text(y + ' won')
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).disabled = true
  }
}

// if a move is succesfull update the message
const newMovesuccesfull = function (data) {
  if (store.currentLetter === 'X') {
    $('.message1').text('next move: O')
  } else {
    $('.message1').text('next move: X')
  }
  // console.log(data)
}
const newMovefailure = function (data) {
  $('.message').text('error')
  // console.log(data)
}

// show stats of user
const gameStatssuccesfull = function (data) {
  $('.message2').text('Total Games: ' + data.games.length)
}
const gameStatsfailure = function (data) {
  $('.message2').text('failure getting stats')
}

module.exports = {
  changeValue,
  newGamesuccesfull,
  gameFinished,
  newGamefailure,
  newMovesuccesfull,
  newMovefailure,
  gameStatsfailure,
  gameStatssuccesfull
}
