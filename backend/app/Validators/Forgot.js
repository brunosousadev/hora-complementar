/* eslint-disable no-undef */
const Antl = use('Antl');
const { rule } = use('Validator');

class Forgot {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      email: [rule('email'), rule('required')],
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Forgot;
