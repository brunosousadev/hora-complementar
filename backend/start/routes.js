'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.post('sessions','SessionController.store').validator('Session');
Route.post('forgotPassword', 'ForgotPasswordController.store').validator('Forgot');
Route.post('reset', 'ResetPasswordController.store').validator('Reset');


Route.get('courses', 'CourseController.index');
Route.get('courses/:id', 'CourseController.show');
Route.post('courses', 'CourseController.store').validator('Course');
Route.put('courses/:id', 'CourseController.update').validator('Course');
Route.delete('courses/:id', 'CourseController.destroy');

Route.get('files/:file','FileController.show');
Route.post('users', 'UserController.store').validator('User');

Route.group(() => {

    Route.get('users', 'UserController.index');
    Route.get('users/:id','UserController.show');    
    Route.put('profile','ProfileController.update').validator('Profile')
    Route.delete('users/:id', 'UserController.destroy');


    Route.post('categories', 'CategoryController.store').validator('Category');
    Route.get('categories', 'CategoryController.index');
    Route.get('categories/:id','CategoryController.show');    
    Route.put('categories/:id','CategoryController.update').validator('Category');
    Route.delete('categories/:id', 'CategoryController.destroy');
    
}).middleware(['auth']);






