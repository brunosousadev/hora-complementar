'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActivitySchema extends Schema {
  up () {
    this.create('activities', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.string('voucher_type').notNullable()
      table.integer('value').notNullable()
      table.integer('id_category').unsigned().notNullable();
      table.foreign('id_category').references('id').inTable('categories');
      table.timestamps()
    })
  }

  down () {
    this.drop('activities')
  }
}

module.exports = ActivitySchema
