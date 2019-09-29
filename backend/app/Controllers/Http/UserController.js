/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model') } */
const User = use('App/Models/User');

class UserController {
  async store({ request , response}) {
       
    const data = request.only([
      'name',
      'username',
      'registration',
      'email',
      'password',
      'course_id',
    ]);
    const user = await User.create({
      ...data,
      computed_hours: 0,
      course_id: data.course_id,
    });

    return response.status(201).send(user);
  }


  async index(){
      const users = await User.all();

      return users;
  }

  async show({ params }) {
    const user = await User.findOrFail(params.id);

    return user;
  }

  async destroy({params}){
    const user  = await User.findOrFail(params.id);
    await user.delete();
  }

}

module.exports = UserController;
