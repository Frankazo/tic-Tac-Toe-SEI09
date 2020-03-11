'use strict'
const store = require('../store')

const changeValueX = function (id) {
  // console.log('working in ui')
  // logic of what player is playing
  // condition that avoids the player from playing in the same spot
  if ($('#' + id).html() === '') {
    $('#' + id).html('X')
  }
}

const changeValueO = function (id) {
  // console.log('working in ui')
  // logic of what player is playing
  // condition that avoids the player from playing in the same spot
  if ($('#' + id).html() === '') {
    $('#' + id).html('O')
  }
}

// for now this just cleans the board, eventually it will create a new game in the api
const newGame = function () {
  for (let i = 0; i < 9; i++) {
    $('#' + i).html('')
  }
  store.p = ['', '', '', '', '', '', '', '', '']
  store.count = 1
}

// when game is finished stop user from keep playing and displays winner
const gameFinished = function (y) {
  // console.log(y + ' won')
  $('.message').text(y + ' won')
  setTimeout(newGame(), 5000)
}

module.exports = {
  changeValueX,
  changeValueO,
  newGame,
  gameFinished
}
