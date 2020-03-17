'use strict'
const store = require('../store')
const signUpSuccess = function (data) {
  $('#sMessage').text('Signed up Succesfully, you have to Log in').removeClass('failure').addClass('success')
  $('.dropdown-menu').removeClass('show')
  document.getElementById('sign-up').reset()
}
const signUpFailure = function () {
  $('#sMessage').text('Error Signing up').removeClass('success').addClass('failure')
  document.getElementById('sign-up').reset()
}

const signInSuccess = function (data) {
  $('#sMessage').text('Signed in Succesfully').removeClass('failure').addClass('success')
  $('#new-Game, #stats, #navbarDropdown3, #sign-out').removeClass('hide')
  $('#navbarDropdown1, #navbarDropdown2').addClass('hide')
  $('.dropdown-menu').removeClass('show')

  document.getElementById('sign-in').reset()
  store.user = data.user
}
const signInFailure = function (data) {
  $('#sMessage').text('Error Signing in').removeClass('success').addClass('failure')
  document.getElementById('sign-in').reset()
}

const changePWSuccess = function (data) {
  $('#sMessage').text('Changed Password Succesfully').removeClass('failure').addClass('success')
  document.getElementById('change-Pw').reset()
}
const changePWFailure = function (data) {
  $('#sMessage').text('Error changing Password').removeClass('success').addClass('failure')
  document.getElementById('change-Pw').reset()
}

const signOutSuccess = function () {
  $('#sMessage').text('Signed out Succesfully').removeClass('failure').addClass('success')
  $('#game, #new-Game, #stats, #statistics, #sign-out, #navbarDropdown3').addClass('hide')
  $('#navbarDropdown1, #navbarDropdown2').removeClass('hide')
  $('#games-display').html('')
  for (let i = 0; i < 9; i++) {
    $('#' + i).html('')
    document.getElementById(i).disabled = false
  }
  $('.message2').text('')
  store.p = ['', '', '', '', '', '', '', '', '']
  store.count = 0
  store.currentLetter = ''
  store.bool = false
}
const signOutFailure = function () {
  $('#sMessage').text('Error Signing out').removeClass('success').addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWSuccess,
  changePWFailure,
  signOutSuccess,
  signOutFailure
}
