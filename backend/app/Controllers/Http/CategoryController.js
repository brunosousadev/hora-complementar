/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model') } */
const Category = use('App/Models/Category');
/**
 * Resourceful controller for interacting with categories
 */
class CategoryController {
  /**
   * Show a list of all categories.
   * GET categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const categories = await Category.query()
      .with('activities')
      .fetch();

    return categories;
  }


  /**
   * Create/save a new category.
   * POST categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only(['name','description','note','limit','course_id']);
       
    const category = await Category.create({
      ...data ,
      course_id: data.course_id
    });

    return response.status(201).send(category);

  }

  /**
   * Display a single category.
   * GET categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params}) {
      const category = await Category.findOrFail(params.id);

      return category;
  }


  /**
   * Update category details.
   * PUT or PATCH categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    
    const category = await  Category.findOrFail(params.id);
    const data = request.only(['name','description','note','limit','course_id']);

    category.merge(data);

    await category.save();

    return category;
  }

  /**
   * Delete a category with id.
   * DELETE categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const category = await  Category.findOrFail(params.id);

    await category.delete();

  }
}

module.exports = CategoryController;
