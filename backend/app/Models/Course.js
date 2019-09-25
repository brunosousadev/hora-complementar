'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Course extends Model {

    users () {
        return this.hasMany('App/Models/User')
      }

    categories(){
        return this.hasMany('App/Models/Category')
      }
}

module.exports = Course
