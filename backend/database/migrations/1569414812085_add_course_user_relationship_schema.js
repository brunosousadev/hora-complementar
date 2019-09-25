'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddCourseUserRelationshipSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      table.integer('course_id').unsigned().notNullable().references('id').inTable('courses');      
    })
  }


  down () {
    this.table('users', (table) => {
      table.dropColumn('course_id');
    })
  }
}

module.exports = AddCourseUserRelationshipSchema
