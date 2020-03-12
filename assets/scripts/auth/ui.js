'use strict'
const store = require('../store')
const signUpSuccess = function (data) {
  $('#message').text('Signed up Succesfully')
  $('#message').removeClass()
  $('#message').addClass('success')
}
const signUpFailure = function () {
  $('#message').text('Error Signing up')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in Succesfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log(data)
  store.user = data.user
}
const signInFailure = function (data) {
  $('#message').text('Error Signing in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log(error)
}

const changePWSuccess = function (data) {
  $('#message').text('Changed Password Succesfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  // console.log(data)
}
const changePWFailure = function (data) {
  $('#message').text('Error changing Password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log(error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out Succesfully')
  $('#message').removeClass()
  $('#message').addClass('success')
}
const signOutFailure = function () {
  $('#message').text('Error Signing out')
  $('#message').removeClass()
  $('#message').addClass('failure')
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
