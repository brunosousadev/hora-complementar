'use strict'

class Reset {
  get validateAll(){
    return true;
  }
  
  get rules () {
    return {
      token: 'required',
      password: 'required|confirmed',   
    }
  }

  get messages () {
    return {
      'token.required': 'You must provide a token.',     
      'password.required': 'You must provide a password.'
    }
  }
}

module.exports = Reset
