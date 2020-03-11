'use strict'

const ui = require('./ui')
// initiate a counter to keep trak of plays
let count = 0
// function that changes the value of an specific spot in the board
const onPlay = function (event) {
  // to prevent the page from reloading when pressing the button i use preventDefault()
  event.preventDefault()

  // to get the id of the button clicked we use event.target.id and assign it to buttonId
  const buttonId = event.target.id
  count += 1
  if (count % 2 === 0) {
  // now we send that id to ui.changeValue to change the value of that particular button
    ui.changeValueX(buttonId)
  } else {
    ui.changeValueO(buttonId)
  }
  // console.log('yeii')
}

module.exports = {
  onPlay
}
