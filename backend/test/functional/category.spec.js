const { test, trait} = use('Test/Suite')('Category');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model') } */
const Category = use('App/Models/Category');

trait('Test/ApiClient')
trait('DatabaseTransactions')
trait('Auth/Client')

test('It should be able create Category',async ({client, assert})=>{
        
    const {id} = await Factory.model('App/Models/Course').create();  
    const user = await Factory.model('App/Models/User').create({
        course_id: id 
      });  
       
      const response = await client.post('/categories')
        .loginVia(user,'jwt')
        .send({
          name: 'Iniciação à Pesquisa e Ensino',
          description:'Experiência ativa em exporconteúdos afins ao curso (ciências exatas ou tecnologia) dentro do contexto universitário',
          note:'Experiência ativa em exporconteúdos afins ao curso (ciências exatas ou tecnologia) dentro do contexto universitário',
          limit: 94 ,
          course_id: id
        })
        .end();
              
    response.assertStatus(201);
    assert.exists(response.body.id);
    
});


test('It should be able to list category', async ({client, assert})=>{
  const {id} = await Factory.model('App/Models/Course').create();  
  const user = await Factory.model('App/Models/User').create({
      course_id: id 
    });  

  const category = await Factory.model('App/Models/Category').create({
    course_id: id 
  });  

  const response = await client.get('/categories').loginVia(user,'jwt').end();

  response.assertStatus(200);  

  assert.equal(response.body[0].id,category.id);

});


test('It should be able to show single category', async ({client, assert})=>{
  const {id} = await Factory.model('App/Models/Course').create();  
  const user = await Factory.model('App/Models/User').create({
      course_id: id 
    });  

  const category = await Factory.model('App/Models/Category').create({
    course_id: id 
  });  

  const response = await client.get(`/categories/${category.id}`).loginVia(user,'jwt').end();
    
    response.assertStatus(200);  
    assert.equal(response.body.id,category.id);
});


test('It should be able to update a category', async ( {client, assert})=>{
  const {id} = await Factory.model('App/Models/Course').create();  
  const name = "Artes";
  const user = await Factory.model('App/Models/User').create({
      course_id: id 
    });  
 
  const category = await Factory.model('App/Models/Category').create({
    course_id: id 
  }); 

  const response = await client.put(`/categories/${category.id}`)
    .send({...category.toJSON(), name: name })
    .loginVia(user,'jwt').end();
        
    response.assertStatus(200);
    
    assert.equal(response.body.name, name);

});


test('Is should be able to delete a category', async ({client, assert})=>{
  const {id} = await Factory.model('App/Models/Course').create();  
  const user = await Factory.model('App/Models/User').create({
      course_id: id 
    });  

  const category = await Factory.model('App/Models/Category').create({
    course_id: id 
  });  

  const response = await client.delete(`/categories/${category.id}`).loginVia(user,'jwt').end();

  response.assertStatus(204);    
  
  const checkCategory = await Category.find(category.id);  
  
  assert.isNull(checkCategory);

});