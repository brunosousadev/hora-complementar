const { test, trait} = use('Test/Suite')('Course');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model') } */
const User = use('App/Models/User');


/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model') } */
const Course = use('App/Models/Course');


trait('Test/ApiClient')
trait('DatabaseTransactions')

test('It should be able create course' ,async ({client, assert})=>{
    
    
    const response = await client.post('/courses').send({
        name: "Ciência da Computação",
        value: 180,
    }).end();
        
    response.assertStatus(201);   
    assert.exists(response.body.id);     
});


test('It should be able to list courses', async ({client, assert})=>{

    const course = await Factory.model('App/Models/Course').create();  
    

    const response = await client.get('/courses').end();
    response.assertStatus(200);

    assert.equal(response.body[0].id,course.id);

});



test('It should be able to show single courses', async ({client, assert})=>{

    const course = await Factory.model('App/Models/Course').create();  
    

    const response = await client.get(`/courses/${course.id}`).end();
    response.assertStatus(200);
    
    assert.equal(response.body.id,course.id);

});



test('It should be able to update a course', async ( {client, assert})=>{
    const course = await Factory.model('App/Models/Course').create();  
    const name = "Ciência da computação";

    const response = await client.put(`/courses/${course.id}`).send({...course.toJSON(), name: name }).end();

    response.assertStatus(200);
    assert.equal(response.body.name, name);

});


test('It should be able to delete a course', async ({client, assert})=>{
    const course = await Factory.model('App/Models/Course').create();  
    const response = await client.delete(`/courses/${course.id}`).end();

    response.assertStatus(204);   
    
    const checkCourse  = await Course.find(course.id);
    
    assert.isNull(checkCourse);

});
