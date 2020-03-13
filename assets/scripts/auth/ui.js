'use strict'
const store = require('../store')
const signUpSuccess = function (data) {
  $('#sMessage').text('Signed up Succesfully')
  $('#sMessage').removeClass('failure')
  $('#sMessage').addClass('success')
  $('#sign-up').addClass('hide')
  $('.dropdown-menu').removeClass('show')
  document.getElementById('sign-up').reset()
}
const signUpFailure = function () {
  $('#sMessage').text('Error Signing up')
  $('#sMessage').removeClass('success')
  $('#sMessage').addClass('failure')
}

const signInSuccess = function (data) {
  $('#sMessage').text('Signed in Succesfully')
  $('#sMessage').removeClass('failure')
  $('#sMessage').addClass('success')
  $('#change-Pw').removeClass('hide')
  $('#new-Game').removeClass('hide')
  $('#stats').removeClass('hide')
  $('#navbarDropdown1').addClass('hide')
  $('.dropdown-menu').removeClass('show')
  $('#navbarDropdown2').addClass('hide')
  $('#sign-out').removeClass('hide')
  document.getElementById('sign-in').reset()
  store.user = data.user
}
const signInFailure = function (data) {
  $('#sMessage').text('Error Signing in')
  $('#sMessage').removeClass('success')
  $('#sMessage').addClass('failure')
  // console.log(error)
}

const changePWSuccess = function (data) {
  $('#sMessage').text('Changed Password Succesfully')
  $('#sMessage').removeClass('failure')
  $('#sMessage').addClass('success')
  document.getElementById('change-Pw').reset()
  // console.log(data)
}
const changePWFailure = function (data) {
  $('#sMessage').text('Error changing Password')
  $('#sMessage').removeClass('success')
  $('#sMessage').addClass('failure')
  // console.log(error)
}

const signOutSuccess = function () {
  $('#sMessage').text('Signed out Succesfully')
  $('#sMessage').removeClass('failure')
  $('#sMessage').addClass('success')
  $('#buttons').addClass('hide')
  $('#change-Pw').addClass('hide')
  $('#new-Game').addClass('hide')
  $('#stats').addClass('hide')
  $('#message1').addClass('hide')
  $('#sign-out').addClass('hide')
  $('.message1').addClass('hide')
  $('#navbarDropdown1').removeClass('hide')
  $('#navbarDropdown2').removeClass('hide')
  for (let i = 0; i < 9; i++) {
    $('#' + i).html('')
    document.getElementById(i).disabled = false
  }
  $('.message').text('')
  $('.message2').text('')
  store.p = ['', '', '', '', '', '', '', '', '']
  store.count = 0
  store.currentLetter = ''
  store.bool = false
}
const signOutFailure = function () {
  $('#sMessage').text('Error Signing out')
  $('#sMessage').removeClass('success')
  $('#sMessage').addClass('failure')
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
