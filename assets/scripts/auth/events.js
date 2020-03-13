'use strict'

// require all necessary documents
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// when we click Sign Up this function prevents the button from default
// gets the information from the form fields
// then calls the api to sign up
// .then and .catch handle the answer from the api
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// when we click Sign Up this function prevents the button from default
// gets the information from the form fields
// then calls the api to sign in
// .then and .catch handle the answer from the api
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// when we click Sign Up this function prevents the button from default
// gets the information from the form fields
// then calls the api to change Password
// .then and .catch handle the answer from the api
const onChangePW = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePWSuccess)
    .catch(ui.changePWFailure)
}

// when we click Sign Up this function prevents the button from default
// then calls the api to sign out
// .then and .catch handle the answer from the api
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// export all functions
module.exports = {
  onSignUp,
  onSignIn,
  onChangePW,
  onSignOut
}
