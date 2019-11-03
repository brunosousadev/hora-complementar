/* eslint-disable no-undef */
const Antl = use('Antl');
const { rule } = use('Validator');

class Course {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      name: [rule('required')],
      value: [rule('required'), rule('number')],
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Course;
