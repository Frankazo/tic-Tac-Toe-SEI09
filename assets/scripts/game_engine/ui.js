'use strict'

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

module.exports = {
  changeValueX,
  changeValueO
}
