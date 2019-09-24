'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


const User = use('App/Models/User');

class UserController {

    async index () {
        const users = await User.all();
    
        return users;
    }
}

module.exports = UserController
