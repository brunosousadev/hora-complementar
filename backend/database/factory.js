'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
 const Factory = use('Factory')

 Factory.blueprint('App/Models/User', (faker, i , data={}) => {
   return {
        name: faker.name(),
        username:faker.name(),
        registration: faker.natural(),
        email:faker.email(),
        password: faker.string(),     
        computed_hours:0,         
        ... data
   }
 })

 Factory.blueprint('App/Models/Token',  (faker, i , data={}) => {
  return {
       type: data.type || 'refreshtoken',
       token: faker.natural({length: 20}),
       ...data
  }
})


 Factory.blueprint('App/Models/Course', (faker) => {
  return {
       name: faker.name(),
       value: faker.integer({ min: 0, max: 200 })
  }
})



Factory.blueprint('App/Models/Category', (faker, i , data={}) => {          
     return {
          name: faker.name(),
          description: faker.paragraph({ sentences: 1 }),          
          note:faker.paragraph({ sentences: 1 }),
          limit: faker.integer({ min: 0, max: 200 }),
          ...data
     }
   })



Factory.blueprint('App/Models/Activity',(faker, i, data={})=>{
     return{
          name: faker.name(),
        description:faker.paragraph({ sentences: 1 }), 
        voucher_type:faker.paragraph({ sentences: 1 }), 
        value:faker.integer({ min: 0, max: 10 }),
        ...data
     }
})


Factory.blueprint('App/Models/Receipt',(faker, i, data={})=>{
     return{
          name: faker.name(),
          description:faker.paragraph({ sentences: 1 }),         
          value:faker.integer({ min: 0, max: 10 }),
        ...data
     }
})