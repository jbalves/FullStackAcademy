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
    response.render('home')
})

const calculoJuros = (p, i, n) => p * Math.pow(1 + i, n)

app.get('/calculadora', (request, response) => {
    /*
    const resultado = {
        calculado: false
    }
    */
    const resultado = {
        calculado: false
    }
    if (request.query.valorInicial && request.query.taxa && request.query.tempo) {
        resultado.calculado = true
        resultado.total = calculoJuros(
            parseFloat(request.query.valorInicial),
            parseFloat(request.query.taxa) / 100,
            parseInt(request.query.tempo)
        )
    }
    response.render('calculadora', { resultado })
})

app.listen(port, () => console.log('Server running...'))