'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/signup', 'AuthController.signup')
Route.post('/signin', 'AuthController.signin')

Route.group(() => {
  Route.resource('customers', 'CustomerController').apiOnly().except(['destroy'])
  Route.resource('evaluations', 'EvaluationController').apiOnly().except(['destroy'])
}).middleware(['auth'])