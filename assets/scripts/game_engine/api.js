'use strict'
// to retrieve the token and APIurl I need to import config and store
const config = require('../config')
const store = require('../store')

// Create game Api call
const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// update game api call
const newMove = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': store.buttonId,
          'value': store.currentLetter
        },
        'over': store.bool
      }
    }
  })
}

// check games api call
const gameStats = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  newMove,
  gameStats
}
