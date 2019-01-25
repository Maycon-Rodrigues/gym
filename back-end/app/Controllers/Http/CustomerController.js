'use strict'

const Customer = use('App/Models/Customer')

class CustomerController {
  /**
   * Show a list of all customers.
   * GET customers
   */
  async index() {
    const customers = Customer.all()

    return customers
  }

  /**
   * Create/save a new customer.
   * POST customers
   */
  async store({ request }) {
    const data = request.only(['name', 'born'])
    const customer = await Customer.create(data)

    return customer
  }

  /**
   * Display a single customer.
   * GET customers/:id
   */
  async show({ params, response }) {
    const id = await Customer.find(params.id)
    const customer = await Customer.query()
      .where('id', params.id)
      .with('evaluations')
      .fetch()

    if (!id) {
      response.status(404).send('Customer not found')
    } else {
      return customer
    }
  }

  /**
   * Update customer details.
   * PUT or PATCH customers/:id
   */
  async update({ params, request, response }) {
    const customer = await Customer.find(params.id)

    if (!customer) {
      response.status(404).send('Customer not found')
    } else {
      const data = request.only(['name', 'born'])

      customer.merge(data)
      await customer.save()

      return customer
    }
  }
}

module.exports = CustomerController
