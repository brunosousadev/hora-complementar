'use strict'
const Antl = use('Antl');
const {rule} = use('Validator');



class Course {

  get validateAll(){
    return true;
  }
  
  get rules () {
    return {
      name: [rule('required')],
      value: [rule('required'),rule('regex', '^[0-9]')],
    }
  }

  get messages () {
    return Antl.list('validation');
  }
}

module.exports = Course
