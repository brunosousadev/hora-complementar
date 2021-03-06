'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActivitySchema extends Schema {
  up () {
    this.create('activities', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('description')
      table.string('voucher_type')
      table.integer('value').notNullable()  
      table.timestamps()
    })
  }

  down () {
    this.drop('activities')
  }
}

module.exports = ActivitySchema
