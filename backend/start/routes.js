'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.post('/sessions','SessionController.store').validator('Session');
Route.post('/forgotPassword', 'ForgotPasswordController.store').validator('Forgot');
Route.post('/reset', 'ResetPasswordController.store').validator('Reset');


Route.post('courses', 'CourseController.store').validator('Course');
Route.put('courses/:id', 'CourseController.update').validator('Course');
Route.get('courses', 'CourseController.index');
Route.get('courses/:id', 'CourseController.show');
Route.delete('courses/:id', 'CourseController.destroy');



Route.post('users', 'UserController.store').validator('User');



