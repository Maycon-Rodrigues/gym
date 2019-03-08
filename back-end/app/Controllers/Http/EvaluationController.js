'use strict';

const Evaluation = use('App/Models/Evaluation');
const Customer = use('App/Models/Customer');

const Database = use('Database');

class EvaluationController {
  /**
   * Show a list of all evaluations.
   * GET evaluations
   */
  async index() {
    /* const evaluations = Customer.query()
      .with('evaluations')
      .fetch();*/
    const evaluations = await Database.table('customers').innerJoin(
      'evaluations',
      'customers.id',
      'evaluations.customer_id'
    );

    return evaluations;
  }

  /**
   * Create/save a new evaluation.
   * POST evaluations
   */
  async store({ request }) {
    const data = request.only(['height', 'weight', 'customer_id']);

    const height = data.height;
    const weight = data.weight;

    const bmi = weight / (height * height);

    const evaluation = await Evaluation.create({ ...data, bmi: bmi });

    return evaluation;
  }

  /**
   * Display a single evaluation.
   * GET evaluations/:id
   */
  async show({ params }) {
    const evaluation = await Evaluation.findOrFail(params.id);

    return evaluation;
  }

  /**
   * Update evaluation details.
   * PUT or PATCH evaluations/:id
   */
  async update({ params, request, response }) {
    const evaluation = await Evaluation.findOrFail(params.id);
    const data = request.all();
  }
}

module.exports = EvaluationController;
