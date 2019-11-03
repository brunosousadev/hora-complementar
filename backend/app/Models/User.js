/* eslint-disable no-undef */
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
/** @type {import('@adonisjs/framework/src/Hash')} */

const Model = use('Model');
const Hash = use('Hash');

class User extends Model {
  static boot() {
    super.boot();
    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        // eslint-disable-next-line no-param-reassign
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  tokens() {
    return this.hasMany('App/Models/Token');
  }

  vouchers() {
    return this.hasMany('App/Models/Receipt');
  }
}

module.exports = User;
