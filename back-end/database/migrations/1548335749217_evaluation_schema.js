'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EvaluationSchema extends Schema {
  up() {
    this.create('evaluations', table => {
      table.increments()
      table
        .integer('customer_id')
        .unsigned()
        .references('id')
        .inTable('customers')
        .onUpdate('CASCADE')
      table.decimal('height', 4, 2).notNullable()
      table.integer('weight', 3).notNullable()
      table.decimal('bmi', 5, 2).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('evaluations')
  }
}

module.exports = EvaluationSchema
