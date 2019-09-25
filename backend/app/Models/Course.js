'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Course extends Model {

    
    users(){
        return this.belongsTo('App/Models/User')
    }

    categories(){
        return this.belongsTo('App/Models/Category')
    }
}

module.exports = Course
