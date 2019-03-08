'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Evaluation extends Model {
    custumer (){ return this.belongsTo('App/Models/Customer')}
}

module.exports = Evaluation
