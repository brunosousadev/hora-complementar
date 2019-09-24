'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddRelationshipCattegoryemActivitySchema extends Schema {
  up () {
    this.table('activities', (table) => {
      table.foreign('id_category').references('id').inTable('categories');

    })
  }

  down () {
    this.table('activities', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddRelationshipCattegoryemActivitySchema
