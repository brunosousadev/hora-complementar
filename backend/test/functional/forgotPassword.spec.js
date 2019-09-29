const { test, trait} = use('Test/Suite')('Forgot Password');

const {subHours, format} = require('date-fns');
const Mail = use('Mail');
const Hash = use('Hash');
const Database = use('Database');   

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');


trait('Test/ApiClient')
trait('DatabaseTransactions')


test('It should send an email with reset password instructions',async ({client, assert})=>{  
    Mail.fake();    

    const course = await Factory.model('App/Models/Course').create();    

    const forgotPayload = {
        email:"barbaralady13@gmail.com",        
        course_id:  course.id
    }
   
    const user = await Factory.model('App/Models/User').create(forgotPayload);

    await client.post('/forgotPassword').send(forgotPayload).end()
                
    const token = await user.tokens().first(); 
        
     const recentEmail =  Mail.pullRecent();
    
     assert.equal(recentEmail.message.to[0].address, forgotPayload.email);    

    assert.include(token.toJSON() ,{        
        type: 'forgotPassword',
    });

    Mail.restore();
});


test('it should reset password', async ({client, assert})=>{    
    const newPassword = "123456";
    
    const course = await Factory.model('App/Models/Course').create();    

    const forgotPayload = {
        email:"barbaralady13@gmail.com",        
        course_id:  course.id
    };
   
    const user = await Factory.model('App/Models/User').create(forgotPayload);
        
    const userToken = await Factory.model('App/Models/Token').make();        
    await user.tokens().save(userToken);


   const response =  await client.post('/reset')
        .send({
            token: userToken.token,
            password: newPassword,
            password_confirmation: newPassword
        })
        .end();

    response.assertStatus(204);
        
    await user.reload();
        
    const checkPassword = await Hash.verify(newPassword, user.password);
                
    assert.isTrue(checkPassword);

});


test('it cannot reset password after 2h of forgot password request', async ({client, assert})=>{ 
    const course = await Factory.model('App/Models/Course').create();    
    const forgotPayload = {
        email:"barbaralady13@gmail.com",        
        course_id:  course.id
    }
        
    const user = await Factory.model('App/Models/User').create(forgotPayload);
    const userToken = await Factory.model('App/Models/Token').make();            
    await user.tokens().save(userToken);
    
    const dateWithSub = format(subHours(new Date(), 2), 'yyyy-MM-dd HH:ii:ss');

    await Database.table('tokens').where('token', userToken.token).update('created_at', dateWithSub);

    await userToken.reload();
    
});