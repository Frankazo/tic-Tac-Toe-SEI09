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
const newGame = function () {
  for (let i = 0; i < 9; i++) {
    $('#' + i).html('')
    document.getElementById(i).disabled = false
  }
  $('.message').text('')
  store.p = ['', '', '', '', '', '', '', '', '']
  store.count = 0
  store.currentLetter = ''
}

// when game is finished stop user from keep playing and displays winner
const gameFinished = function (y) {
  console.log(y + ' won')
  $('.message').text(y + ' won')
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).disabled = true
  }
}

module.exports = {
  changeValue,
  newGame,
  gameFinished
}
