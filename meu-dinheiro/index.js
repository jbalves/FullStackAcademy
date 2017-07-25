const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const path = require('path')
//onde estão os templates
app.set('views', path.join(__dirname, 'views'))
//tipo de template
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    response.render('home',{
        nome: 'Jeferson Barros'
    })
})

app.listen(port, () => console.log('Server running...'))