'use strict'

const user = {
}
let buttonId
// game is over
let bool
// Current play
let currentLetter
// player counter
let count
// board representation
let p
// wining combinations
const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

module.exports = {
  user,
  count,
  p,
  combinations,
  currentLetter
}
