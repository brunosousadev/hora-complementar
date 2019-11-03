/* eslint-disable no-undef */
const Antl = use('Antl');
const { rule } = use('Validator');

class Activity {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      name: [rule('required')],
      description: [rule('string')],
      voucher_type: [rule('string')],
      value: [rule('required'), rule('number')],
      category_id: [rule('required'), rule('exists', ['categories', 'id'])],
    };
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Activity;
