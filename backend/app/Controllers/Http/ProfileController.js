'use strict'

const Helpers = use('Helpers');


/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model') } */
const User = use('App/Models/User');

class ProfileController {
  async update({ request, auth }) {
    const data = request.only([
      'name',
      'username',
      'course_id',
    ]);


    const user = await User.findOrFail(auth.user.id);    
    const avatar = request.file('avatar');

    if (avatar) {    
        await avatar.move(Helpers.tmpPath('uploads'), {
        name: `${new Date().getTime()}.${avatar.subtype}`
      });

      if (!avatar.moved()) {
        return avatar.error()
      }

      user.avatar = avatar.fileName;
    }

    user.merge(data);

    const {password} = request.only(['password']);
    if (password) {      
      user.password = password;
    }    
    await user.save();    
    return user;
  }
}

module.exports = ProfileController
