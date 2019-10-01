const { test, trait} = use('Test/Suite')('Receipt');

const Helpers = use('Helpers');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model') } */
const Receipt = use('App/Models/Receipt');

trait('Test/ApiClient')
trait('DatabaseTransactions')
trait('Auth/Client')

test('It should be able create receipt',async ({client, assert})=>{
        
  const course = await Factory.model('App/Models/Course').create();      

  const user = await Factory.model('App/Models/User').create({course_id: course.id });  

  const category = await Factory.model('App/Models/Category').create({course_id: course.id });
  
  const activity = await Factory.model('App/Models/Activity').create({category_id: category.id });
  

  

  const response = await client.post('/receipts')
    .loginVia(user,'jwt')
      .field('name','course of Git')
      .field('description','course of git')
      .field('value',10)
      .attach('file_receipt',Helpers.tmpPath('test/Curriculo.pdf'))
      .field('user_id',user.id)
      .field('activity_id',activity.id)        
  .end();        
  response.assertStatus(201);
  assert.exists(response.body.id);
    
});


test('It should be able to list receipt',async ({client, assert})=>{

  const course = await Factory.model('App/Models/Course').create();      
  const user = await Factory.model('App/Models/User').create({course_id: course.id });  
  const category = await Factory.model('App/Models/Category').create({course_id: course.id });  
  const activity = await Factory.model('App/Models/Activity').create({category_id: category.id });

  const receipt = await Factory.model('App/Models/Receipt').create({
    user_id: user.id,
    activity_id: activity.id
  });

  const response = await client.get('/receipts')
  .loginVia(user,'jwt')
  .end();

  response.assertStatus(200);  

  assert.equal(response.body[0].id,receipt.id);

});


test('It should be able to show single a receipt',async ({client, assert})=>{

  const course = await Factory.model('App/Models/Course').create();      
  const user = await Factory.model('App/Models/User').create({course_id: course.id });  
  const category = await Factory.model('App/Models/Category').create({course_id: course.id });  
  const activity = await Factory.model('App/Models/Activity').create({category_id: category.id });
  const receipt = await Factory.model('App/Models/Receipt').create({
    user_id: user.id,
    activity_id: activity.id
  });

  const response = await client.get(`/receipts/${receipt.id}`)
    .loginVia(user,'jwt')
    .end();

  response.assertStatus(200); 
  assert.equal(response.body.id, receipt.id);

});



test('It should be able update receipt',async ({client, assert})=>{
  const course = await Factory.model('App/Models/Course').create();      
  const user = await Factory.model('App/Models/User').create({course_id: course.id });  
  const category = await Factory.model('App/Models/Category').create({course_id: course.id });  
  const activity = await Factory.model('App/Models/Activity').create({category_id: category.id });
  const receipt = await Factory.model('App/Models/Receipt').create({
    user_id: user.id,
    activity_id: activity.id
  });
  const name  = 'Course of graph';
  const response = await client.put(`/receipts/${receipt.id}`)
  .loginVia(user,'jwt')  
  .send({
    ...receipt.toJSON(),
    name:name
  })
  .end();

  response.assertStatus(200);

  await receipt.reload();    
  assert.equal(response.body.name,name);
});

test('It should be able delete receipt', async ({client, assert})=>{
  const course = await Factory.model('App/Models/Course').create();      
  const user = await Factory.model('App/Models/User').create({course_id: course.id });  
  const category = await Factory.model('App/Models/Category').create({course_id: course.id });  
  const activity = await Factory.model('App/Models/Activity').create({category_id: category.id });
  const receipt = await Factory.model('App/Models/Receipt').create({
    user_id: user.id,
    activity_id: activity.id
  });

  const response = await client.delete(`/receipts/${receipt.id}`).loginVia(user,'jwt').end();

    

  response.assertStatus(204);   
    
    const checkReceipt  = await Receipt.find(receipt.id);
    
    assert.isNull(checkReceipt);

});