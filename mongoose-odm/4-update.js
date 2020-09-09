require('./0-connection')

const Dog = require('./models/Dog.model')


// // .findByIdAndUpdate()
// // Recibe string con id, y manipulación
// // Por defecto, retorna el elemento anterior al update
// // Un  tercer argumento opcional {new: true} retorna el objeto ya actualizado
// Dog
//     .findByIdAndUpdate('5f58992cba7f75a4c2897c82', { $inc: { age: 1 } }, { new: true })
//     .then(dog => console.log("El perro modificado es:", dog))
//     .catch(err => console.log('Hubo un error', err))



// // Recibe query, actualiza el primer match
// Dog
//     .updateOne({ name: 'Lassie' }, { name: 'Lassie Reloaded' })
//     .then(details => console.log("Los detalles de la modificación son:", details))
//     .catch(err => console.log('Hubo un error', err))




// // Recibe query, actualiza todos los match
// Dog
//     .updateMany({ name: 'Salchichonino' }, { name: 'Salchichonino Reloaded' })
//     .then(details => console.log("Los detalles de la modificación son:", details))
//     .catch(err => console.log('Hubo un error', err))