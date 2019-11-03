/* eslint-disable no-undef */
const Antl = use('Antl');
const { rule } = use('Validator');

class User {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      name: [rule('required')],
      username: [rule('required'), rule('unique', ['users', 'username'])],
      registration: [
        rule('required'),
        rule('unique', ['users', 'registration']),
      ],
      email: [rule('email'), rule('required')],
      password: [rule('required')],
      course_id: [rule('required'), rule('exists', ['courses', 'id'])],
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = User;
