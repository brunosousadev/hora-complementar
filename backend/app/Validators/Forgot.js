'use strict'

class Forgot {

  get validateAll(){
    return true;
  }
  
  get rules () {
    return {
      email: 'email | required',
    }
  }

  get messages () {
    return {
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.'     
    }
  }
}

module.exports = Forgot
