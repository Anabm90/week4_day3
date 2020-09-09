require('./0-connection')

const Dog = require('./models/Dog.model')




// // .findByIdAndDelete()
// // Recibe como argumento el ID string
// // Retorna el objeto eliminado

// Dog.findByIdAndDelete('5f589eeaa19a48a52dce56be')
//     .then(response => console.log('El objeto eliminado era', response))
//     .catch(err => console.log('Se produjo un error', err))




// // .deleteMany()
// // Recibe como argumento una query, afecta a cualquier match
// // Retorna los detalles de la operación

// Dog.deleteMany({ name: 'Bosco' })
//     .then(response => console.log('Se han eliminado', response.deletedCount, 'perro/s'))
//     .catch(err => console.log('Se produjo un error', err))




// // .deleteOne()
// // Recibe como argumento una query, afecta al primer match
// // Retorna los detalles de la operación 

Dog.deleteOne({ age: { $gte: 10 } })
    .then(response => console.log(response))
    .catch(err => console.log('Se produjo un error', err))