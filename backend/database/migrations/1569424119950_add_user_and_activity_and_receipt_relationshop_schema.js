'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddUserAndActivityAndReceiptRelationshopSchema extends Schema {
  up () {
    this.alter('receipts', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users');      
      table.integer('activity_id').unsigned().references('id').inTable('activities');
    })
  }

  down () {
    this.alter('receipts', (table) => {
      table.dropColumn('user_id');
      table.dropColumn('activity_id');
    })
  }
}

module.exports = AddUserAndActivityAndReceiptRelationshopSchema
