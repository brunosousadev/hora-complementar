const { test, trait} = use('Test/Suite')('Category');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');


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
          limit:94,
          course_id: id
        })
        .end();
              
    response.assertStatus(201);
    assert.exists(response.body.id);
    
});

