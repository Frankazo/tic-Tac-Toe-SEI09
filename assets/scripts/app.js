'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./game_engine/events')
// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')

$(() => {
  // game event handlers, for a play, NewGame and Stats
  $('#buttons').on('click', events.onPlay)
  $('#new-Game').on('submit', events.onNewGame)
  $('#stats').on('submit', events.onStats)

  // auth event handlers, for Sign Up, Sign In, Change Password and Sign Out
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-Pw').on('submit', authEvents.onChangePW)
  $('#sign-out').on('submit', authEvents.onSignOut)
})
