'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


const User = use('App/Models/User');
const Course = use('App/Models/Course');
class UserController {

    async index () {
        const users = await User.all();
    
        return users;
    }

    async store ({ request}) {
        const data = request.only(['name','username','registration','email','password','computed_hours','id_course']); 
            
        const user = await User.create({id_course: data.id_course, ...data});
                
        return user;
    
      }
}

module.exports = UserController
