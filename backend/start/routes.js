'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.post('/sessions','SessionController.store');



Route.post('/forgotPassword', 'ForgotPasswordController.store');
Route.post('/reset', 'ResetPasswordController.store');

Route.resource('courses', 'CourseController').apiOnly()
Route.resource('users', 'UserController').apiOnly()



