'use strict'

const Antl = use('Antl');
const {rule} = use('Validator');

class Receipt {
  get validateAll(){
    return true;
  }
  
  get rules () {
    return {
      name: [rule('required')],
      description: [rule('required')],
      value: [rule('required'), rule('number')],   
      avatar: 'file|file_ext:png,jpg,jpeg,pdf|file_size:4mb',             
      user_id: [rule('required'), rule('exists',['users','id'])],
      activity_id: [rule('required'), rule('exists',['activities','id'])]           
    }
  }

  get messages () {
    return Antl.list('validation');
  }
}

module.exports = Receipt
