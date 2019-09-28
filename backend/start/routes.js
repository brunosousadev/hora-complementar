'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.post('/sessions','SessionController.store').validator('Session');
Route.post('/forgotPassword', 'ForgotPasswordController.store').validator('Forgot');
Route.post('/reset', 'ResetPasswordController.store').validator('Reset');

Route.resource('courses', 'CourseController').apiOnly()
Route.resource('users', 'UserController').apiOnly()



