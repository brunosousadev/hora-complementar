'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddCourseCategiryRelationshopSchema extends Schema {
  up () {
    this.alter('categories', (table) => {
      table.integer('course_id').unsigned().notNullable().references('id').inTable('courses');   
    })
  }

  down () {
    this.alter('categories', (table) => {
      table.dropColumn('course_id');
    })
  }
}

module.exports = AddCourseCategiryRelationshopSchema
