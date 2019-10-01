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
      //file_receipt:  [rule('file'),rule('file_ext',['png','jpg','jpeg','pdf']),rule('file_size','2mb')],
      user_id: [rule('required'), rule('exists',['users','id'])],
      activity_id: [rule('required'), rule('exists',['activities','id'])]           
    }
  }

  get messages () {
    return Antl.list('validation');
  }
}

module.exports = Receipt
