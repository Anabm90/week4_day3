const express = require('express')
const app = express()
require('./configs/connection')             // new
const Dog = require('./models/Dog.model')   // new

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')


app.get('/', (req, res) => res.render('index'))

app.get('/perrinos', (req, res) => {

    Dog.find()                              // new
        .then(allDogs => {
            console.log('El array retornado de la BBDD es', allDogs)
            res.render('dogs-list', { allDogs })
        })
        .catch(err => console.log('Error!:', err))
})

app.listen(3000, () => console.log(`Servidor levantado en el puerto 3000`))