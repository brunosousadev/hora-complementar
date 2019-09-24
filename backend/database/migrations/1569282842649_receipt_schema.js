'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReceiptSchema extends Schema {
  up () {
    this.create('receipts', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.integer('value').notNullable()
      table.integer('id_user').unsigned().notNullable();
      table.integer('id_activity').unsigned().notNullable();
      table.foreign('id_user').references('id').inTable('users');
      table.foreign('id_activity').references('id').inTable('activities');
      table.timestamps()
    })
  }

  down () {
    this.drop('receipts')
  }
}

module.exports = ReceiptSchema
