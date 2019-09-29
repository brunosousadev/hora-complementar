'use strict'
const Antl = use('Antl');
const {rule} = use('Validator');


class Category {
  get validateAll(){
    return true;
  }

  get rules () {
    return {
      name: [rule('required'), rule('unique', ['categories','name'])],
      description:[rule('required')],
      note:[rule('required')],
      limit:[rule('required'), rule('regex', '^[0-9]')],
      course_id: [rule('required'), rule('exists',['courses','id'])]
    }
  }

  get messages () {
    return Antl.list('validation');
  }
}

module.exports = Category
