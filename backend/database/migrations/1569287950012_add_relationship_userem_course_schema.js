'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddRelationshipUseremCourseSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.foreign('id_course').references('id').inTable('courses');
    })
  }

  down () {
    this.table('users', (table) => {

    })
  }
}

module.exports = AddRelationshipUseremCourseSchema
