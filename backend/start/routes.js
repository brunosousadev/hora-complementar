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

    
    Route.get('categories', 'CategoryController.index');
    Route.get('categories/:id','CategoryController.show');    
    Route.post('categories', 'CategoryController.store').validator('Category');
    Route.put('categories/:id','CategoryController.update').validator('Category');
    Route.delete('categories/:id', 'CategoryController.destroy');

    
    Route.get('activities', 'ActivityController.index');
    Route.get('activities/:id','ActivityController.show');    
    Route.post('activities', 'ActivityController.store').validator('Activity');   
    Route.put('activities/:id','ActivityController.update').validator('Activity');   
    Route.delete('activities/:id', 'ActivityController.destroy');
    

    Route.post('receipts', 'ReceiptController.store').validator('Receipt');
    Route.get('receipts', 'ReceiptController.index');
    Route.get('receipts/:id','ReceiptController.show');  
    Route.put('receipts/:id','ReceiptController.update');
    Route.delete('receipts/:id','ReceiptController.destroy');

}).middleware(['auth']);






