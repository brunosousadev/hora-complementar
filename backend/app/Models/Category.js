/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Category extends Model {
  activities() {
    return this.hasMany('App/Models/Activity');
  }
}

module.exports = Category;
