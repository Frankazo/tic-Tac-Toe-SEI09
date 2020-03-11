'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./game_engine/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // click event that will change the empty space to an X or O
  $('#buttons').on('click', events.onPlay)
})
