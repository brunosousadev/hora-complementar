
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model') } */
const Activity = use('App/Models/Activity');

/**
 * Resourceful controller for interacting with activities
 */
class ActivityController {
  /**
   * Show a list of all activities.
   * GET activities
   */
  async index() {
      const activities = await Activity.all();
      return activities;
  }


  async store({ request}) {
      const data = request.only(['name','description','voucher_type','value','category_id']);    
      const activity = await Activity.create(data);

      return activity;
  }

  /**
   * Display a single activity.
   * GET activities/:id   
   */
  async show({ params}) {
    const activity = await Activity.findOrFail(params.id);

    return activity;
  }


  /**
   * Update activity details.
   * PUT or PATCH activities/:id
   */
  async update({ params, request }) {
    const data = request.only(['name','description','voucher_type','value','category_id']); 

    const activity = await Activity.findOrFail(params.id);

    activity.merge(data);
    await activity.save();

    return activity;
  }

  /**
   * Delete a activity with id.
   * DELETE activities/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params}) {
    const activity = await  Activity.findOrFail(params.id);

    await activity.delete();
  }
}

module.exports = ActivityController;
