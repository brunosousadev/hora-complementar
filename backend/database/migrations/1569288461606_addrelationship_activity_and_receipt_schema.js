'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddrelationshipActivityAndReceiptSchema extends Schema {
  up () {
    this.table('receipts', (table) => {
      table.foreign('id_activity').references('id').inTable('activities');
    })
  }

  down () {
    this.table('receipts', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddrelationshipActivityAndReceiptSchema
