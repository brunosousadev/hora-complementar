'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddrelationshipUserAndreceiptSchema extends Schema {
  up () {
    this.table('receipts', (table) => {
      table.foreign('id_user').references('id').inTable('users');
    })
  }

  down () {
    this.table('receipts', (table) => {
            
    })
  }
}

module.exports = AddrelationshipUserAndreceiptSchema
