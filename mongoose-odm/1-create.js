require('./0-connection')

const Dog = require('./models/Dog.model')


// Retorna un objeto

// Dog.create({ name: 'Popino', age: 13, color: 'Caramelo' })
//     .then(theNewDog => console.log(`El nuevo item creado es ${theNewDog}`))
//     .catch(err => console.log(`Ha sucedido un error: ${err}`))





// Retorna un array
Dog.create([
    { name: 'Bonnie', age: 16, color: 'caramelo' },
    { name: 'Salchichonino', age: 1, color: 'blanco' },
    { name: 'Lassie', age: 2, color: 'verde' }
])
    .then(theNewDogs => console.log(`Se han creado ${theNewDogs.length} perros, el primero se llama ${theNewDogs[0].name}`))
    .catch(err => console.log(`Ha sucedido un error: ${err}`))