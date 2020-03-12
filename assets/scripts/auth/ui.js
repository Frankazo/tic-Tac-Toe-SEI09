'use strict'
const store = require('../store')
const signUpSuccess = function (data) {
  $('#sMessage').text('Signed up Succesfully')
  $('#sMessage').removeClass('failure')
  $('#sMessage').addClass('success')
  $('#sign-up').addClass('hide')
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
  $('#sign-in').addClass('hide')
  $('#sign-up').addClass('hide')
  $('#sign-out').removeClass('hide')

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
  $('#sign-in').removeClass('hide')
  $('#sign-up').removeClass('hide')
  $('#message1').addClass('hide')
  $('#sign-out').addClass('hide')
  $('.message1').addClass('hide')
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
