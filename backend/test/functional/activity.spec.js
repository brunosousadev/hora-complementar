const { test, trait} = use('Test/Suite')('Activity');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model') } */
const Activity = use('App/Models/Activity');

trait('Test/ApiClient')
trait('DatabaseTransactions')
trait('Auth/Client')


test('It should be able create activity',async ({client, assert})=>{
  
    const course = await Factory.model('App/Models/Course').create();      

    const user = await Factory.model('App/Models/User').create({course_id: course.id });  

    const category = await Factory.model('App/Models/Category').create({course_id: course.id });
    

    const response = await client.post('/activities')
      .loginVia(user,'jwt')
      .send({
        name: 'Estágio Não Curricular na área de formação.',
        description:'Contrato de estágio e declaração do supervisor do estágio.',
        voucher_type:'Valor: até ​ 4 ​ HC por semana de atividade.',
        value:4,
        category_id: category.id 
    })
    .end();      

    response.assertStatus(200);
    assert.exists(response.body.id);
    
});


test('It should be able to list  activity', async ({client, assert})=>{
  const course = await Factory.model('App/Models/Course').create();      

  const user = await Factory.model('App/Models/User').create({course_id: course.id });  

  const category = await Factory.model('App/Models/Category').create({course_id: course.id });

  const activity = await Factory.model('App/Models/Activity').create({category_id: category.id });

  const response = await client.get('/activities')
    .loginVia(user,'jwt')
    .end();

    response.assertStatus(200);  

    assert.equal(response.body[0].id,activity.id);
});

test('It should be able to show single a activity', async ({client, assert})=>{
  const course = await Factory.model('App/Models/Course').create();      
  const user = await Factory.model('App/Models/User').create({course_id: course.id });  
  const category = await Factory.model('App/Models/Category').create({course_id: course.id });
  const activity = await Factory.model('App/Models/Activity').create({category_id: category.id });

  const response = await client.get(`/activities/${activity.id}`)
    .loginVia(user,'jwt')
    .end();

    response.assertStatus(200);     
    assert.equal(response.body.id, activity.id);

});


test('It should be able to update a activity', async ({client, assert})=>{
  const course = await Factory.model('App/Models/Course').create();      
  const user = await Factory.model('App/Models/User').create({course_id: course.id });  
  const category = await Factory.model('App/Models/Category').create({course_id: course.id });
  const activity = await Factory.model('App/Models/Activity').create({category_id: category.id });
  
  const name = "Participation in research groups";


  const response = await client.put(`/activities/${activity.id}`)
    .loginVia(user,'jwt')
    .send({
      ...activity.toJSON(),
      name: name
    })
    .end();

    response.assertStatus(200);
    assert.equal(response.body.name, name);

});


test('It should be able to delete a course', async ({client, assert})=>{
  
  
  const course = await Factory.model('App/Models/Course').create();      
  const user = await Factory.model('App/Models/User').create({course_id: course.id });  
  const category = await Factory.model('App/Models/Category').create({course_id: course.id });
  const activity = await Factory.model('App/Models/Activity').create({category_id: category.id });

  const response = await client.delete(`/activities/${activity.id}`).loginVia(user,'jwt').end();
  
  response.assertStatus(204);   
    
  const checkActivity  = await Activity.find(activity.id);
  
  assert.isNull(checkActivity);

});