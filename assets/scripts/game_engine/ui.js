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

  $('.message2').text('')
  $('.message1').text('Player X first').removeClass('hide')
  $('#game').removeClass('hide')
  $('#statistics').addClass('hide')
  $('#sMessage').text('Game created').removeClass('failure').addClass('success')
}
const newGamefailure = function (data) {
  $('#sMessage').text('Unable to start a new game').removeClass('success').addClass('failure')
}

// when game is finished stop user from keep playing and displays winner
const gameFinished = function (y) {
  $('.message1').text(y + ' won')
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).disabled = true
  }
  // set store.bool to true to tell the api that the game has ended
  store.bool = true
}

// if a move is succesfull update the message
const newMovesuccesfull = function () {
  $('.message2').text('')
}
const newMovefailure = function (data) {
  $('#sMessage').text('Error making a move').removeClass('success').addClass('failure')
}

// show statistics to the user
const gameStatssuccesfull = function (data) {
  $('#sMessage').text('Succesfully retrieve statistics').removeClass('failure').addClass('success')
  $('.mestas').text('Total Games: ' + data.games.length)
  $('#game').addClass('hide')
  $('#statistics').removeClass('hide')
  // we want to show all of the games, we will build up that html
  let allgamesHtml = ''

  // For every game we got back from the api
  data.games.forEach(game => {
    let v = ''
    let t = ''
    if (game.over === false) {
      v = 'Keep Playing?'
      t = 'Play'
    } else {
      v = 'Game Over'
      t = 'Checkout'
    }
    // build up html for a single game
    const gameHtml = `
    <div class="col mb-4">
      <div class="card h-100 bg-light mb-3">
      <div class="card-header">ID: ${game.id}</div>
       <div class="card-body">
         <h5>Game: ${game.cells}</h5>
         <h5>${v}</h5>
         <button id="${game.id}" type="button" class="prevGames">${t}</button>
       </div>
     </div>
    </div>
  `
    // add each individual game's html to `allgamesHtml`
    allgamesHtml += gameHtml

    // Select the '#games-display' div and put all of our game html on the page
    $('#games-display').html(allgamesHtml)
  })
}

const gameStatsfailure = function (data) {
  $('#sMessage').text('failure getting stats').removeClass('success').addClass('failure')
}
// if a move is succesfull update the message
const showGamesuccesfull = function (data) {
  $('#sMessage').text('Game retrieve').removeClass('failure').addClass('success')
  $('.message2').text('')
  $('.message1').text('Player X first').removeClass('hide')
  $('#game').removeClass('hide')
  $('#statistics').addClass('hide')

  store.p = data.game.cells
  store.count = store.p.filter(x => x !== '').length
  store.game = data.game
  store.bool = data.game.over

  for (let i = 0; i < 9; i++) {
    $('#' + i).html(store.p[i])
    document.getElementById(i).disabled = store.bool
  }
}
const showGamefailure = function (data) {
  $('#sMessage').text('Error retrieving the game').removeClass('success').addClass('failure')
}

module.exports = {
  newGamesuccesfull,
  gameFinished,
  newGamefailure,
  newMovesuccesfull,
  newMovefailure,
  gameStatsfailure,
  gameStatssuccesfull,
  showGamefailure,
  showGamesuccesfull
}
