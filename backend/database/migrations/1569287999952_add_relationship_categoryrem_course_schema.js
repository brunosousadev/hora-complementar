'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddRelationshipCategoryremCourseSchema extends Schema {
  up () {
    this.table('categories', (table) => {
      table.foreign('id_course').references('id').inTable('courses');
    })
  }

  down () {
    this.table('categories', (table) => {

    })
  }
}

module.exports = AddRelationshipCategoryremCourseSchema
