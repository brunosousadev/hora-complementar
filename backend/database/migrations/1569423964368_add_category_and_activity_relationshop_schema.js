'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddCategoryAndActivityRelationshopSchema extends Schema {
  up () {
    this.alter('activities', (table) => {
      table.integer('category_id').unsigned().references('id').inTable('categories')      
    })
  }

  down () {
    this.alter('activities', (table) => {
      table.dropColumn('category_id');
    })
  }
}

module.exports = AddCategoryAndActivityRelationshopSchema
