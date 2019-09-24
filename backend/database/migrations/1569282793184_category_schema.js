'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.string('note').notNullable()
      table.integer('limit').notNullable()
      table.integer('id_course').unsigned().notNullable();
      table.foreign('id_course').references('id').inTable('courses');
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
