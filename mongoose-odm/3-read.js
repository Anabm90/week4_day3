require('./0-connection')

const Dog = require('./models/Dog.model')

// // .find()
// // Sin argumento, retorna un array con todos los registros en forma de objeto
// Dog.find()
//     .then(allDogsFromDB => console.log(`Hay un total de ${allDogsFromDB.length} perros`))
//     .catch(err => console.log('Se produjo un error:', err))



// // .find()
// // Puede recibir un primer argumento (query), retorna un array con todos los registros en forma de objeto
// Dog.find({ name: 'Cartucho' })
//     .then(allDogsFromDB => console.log(`Hay un total de ${allDogsFromDB.length} perros`))
//     .catch(err => console.log('Se produjo un error:', err))



// // .find()
// // Puede recibir un segundo argumento opcional (projection), retorna un array con todos los registros en forma de objeto
// Dog.find({ name: 'Cartucho' }, { name: 1, age: 1 })
//     .then(allDogsFromDB => console.log(allDogsFromDB))
//     .catch(err => console.log('Se produjo un error:', err))




// // .findById()
// // Recibe un string con un ID, retorna el objeto que haga match
// Dog.findById('5f589961be6894a4c8fe85b7')
//     .then(theDog => console.log(theDog))
//     .catch(err => console.log('Se produjo un error:', err))



// // .findOne()
// // Recibe un argumento (query), retorna un array con el primer registro que haga match en forma de objeto
Dog.findOne({ age: { $lt: 6 } })
    .then(dogs => console.log(dogs))
    .catch(err => console.log('Se produjo un error:', err))