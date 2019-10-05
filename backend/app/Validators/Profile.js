'use strict'

const Antl = use('Antl');

class Profile {
  get validateAll(){
    return true;
  }
  
  get rules () {
    return {     
      avatar: 'file|file_ext:png,jpg,jpeg|file_size:2mb|file_types:image',                     
    }
  }

  get messages () {
    return Antl.list('validation');
  }
}

module.exports = Profile
