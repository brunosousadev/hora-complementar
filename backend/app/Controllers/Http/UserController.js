const User = use('App/Models/User');

class UserController {
  async store({ request }) {
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

    return user;
  }
}

module.exports = UserController;
