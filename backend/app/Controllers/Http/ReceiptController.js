/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model') } */
const Receipt = use('App/Models/Receipt');
const Helpers = use('Helpers');
/**
 * Resourceful controller for interacting with receipts
 */
class ReceiptController {
  /**
   * Show a list of all receipts.
   * GET receipts
   */
  async index({ request, response, view }) {
    const receipts = await Receipt.all();

    return receipts;

  }

  /**
   * Create/save a new receipt.
   * POST receipts
   */
  async store({ request, response }) {
    const data = request.only([
      'name',
      'description',
      'value',
      'user_id',
      'activity_id',      
    ]);
    
    const file_receipt = request.file('file_receipt');
    
    if(file_receipt){
      await file_receipt.move(Helpers.tmpPath('receipts'), {
        name: `${new Date().getTime()}_${data.user_id}_.${file_receipt.subtype}`
      });

      if (!file_receipt.moved()) {
        return file_receipt.error()
      }

      data.file_receipt = file_receipt.fileName;      
    }

    const receipt = await  Receipt.create({...data});

    return response.status(201).send(receipt);    
  }

  /**
   * Display a single receipt.
   * GET receipts/:id
   *   
   */
  async show({ params}) {
    const receipt = await Receipt.findOrFail(params.id);

    return receipt;

  }

  /**
   * Update receipt details.
   * PUT or PATCH receipts/:id
   */
  async update({ params, request}) {
      const receipt = await Receipt.findOrFail(params.id);
      const data = request.only([
        'name',
        'description',
        'value',
        'user_id',
        'activity_id',      
      ]);
      
     const file_receipt = request.file('file_receipt');          

      if(file_receipt){
        
        await file_receipt.move(Helpers.tmpPath('receipts'), {
          name: `${new Date().getTime()}_${data.user_id}_.${file_receipt.subtype}`
      });

      if (!file_receipt.moved()) {
        return file_receipt.error()
      }

      data.file_receipt = file_receipt.fileName;      
    }

      receipt.merge(data);

      await receipt.save();

      return receipt;
  }

  /**
   * Delete a receipt with id.
   * DELETE receipts/:id
   */
  async destroy({ params}) {
    const receipt = await Receipt.findOrFail(params.id);
    await receipt.delete();
  }
}

module.exports = ReceiptController;
