'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model') } */
const User = use('App/Models/User');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Helpers = use('Helpers');
const Hash = use('Hash');

const { test, trait} = use('Test/Suite')('User')

trait('Test/ApiClient')
trait('DatabaseTransactions')
trait('Auth/Client')


test('It should be able create user' ,async ({client, assert})=>{
  const course = await Factory.model('App/Models/Course').create();  
    

  const response = await client.post('/users').send({
        name: "Bruno Teixeira de Sousa",
        username: "brse01",
        registration: "381019",
        email: "brse01@gmail.com",
        password: "381019",     
        computed_hours:0,  
        course_id: course.id 
  }).end();
    
  
  response.assertStatus(201);   
  assert.exists(response.body.id);    
});


test('It should be able to list user', async ({client, assert})=>{
    const {id} = await Factory.model('App/Models/Course').create();  

    const user = await Factory.model('App/Models/User').create({
      course_id: id 
    });  

    const response = await client.get('/users').loginVia(user,'jwt').end();
      
    
    response.assertStatus(200);

    assert.equal(response.body[0].id,user.id);
});

test('It should be able to show single user', async ({client, assert})=>{
  const {id} = await Factory.model('App/Models/Course').create();  

  const user = await Factory.model('App/Models/User').create({
    course_id: id 
  });  

  const response = await client.get(`/users/${user.id}`).loginVia(user,'jwt').end();
  response.assertStatus(200);
    
    assert.equal(response.body.id,user.id);

});

test('It should be able to update a profile', async ( {client, assert})=>{
  const {id} = await Factory.model('App/Models/Course').create(); 

  const user = await Factory.model('App/Models/User').create({
    name: 'Bruno Sousa',
    password: '123123',
    course_id: id 
  });  

  const response = await client
      .put('/profile')
      .field('name','Maria')
      .field('password','123456')
      .field('password_confirmation','123456')
      .attach('avatar',Helpers.tmpPath('test/avatar.png'))
      .loginVia(user,'jwt')
      .end();
  
    response.assertStatus(200);

    await user.reload();    

    assert.equal(response.body.name,'Maria');
    assert.isTrue(await Hash.verify('123456',user.password));
    assert.exists(response.body.avatar);

});

test('It should be able to delete a user', async ({client, assert})=>{
  const {id} = await Factory.model('App/Models/Course').create();     
  const user = await Factory.model('App/Models/User').create({
    course_id: id 
  });
  
  
  
  const response = await client
    .delete(`/users/${user.id}`)
    .loginVia(user,'jwt')
    .end();

  response.assertStatus(204);   
  
  const checkUser  = await User.find(user.id);
  
  assert.isNull(checkUser);

});
