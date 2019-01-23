'use strict'

const Customer = use('App/Models/Customer')

class CustomerController {
  /**
   * Show a list of all customers.
   * GET customers
  */
  async index () {
    const customers = Customer.all()

    return customers
  }


  /**
   * Create/save a new customer.
   * POST customers
  */
  async store ({ request }) {
      const data = request.only(['name', 'born'])
      const customer = await Customer.create(data)

      return customer
  }

  /**
   * Display a single customer.
   * GET customers/:id
   */
  async show ({ params }) {
    const customer = await Customer.findOrFail(params.id)

    return customer
  }

  /**
   * Update customer details.
   * PUT or PATCH customers/:id
  */
  async update ({ params, request }) {
    const customer = await Customer.findOrFail(params.id)
    const data = request.only(['name', 'born'])

    customer.merge(data)
    await customer.save()
    
    return customer
  }

}

module.exports = CustomerController
