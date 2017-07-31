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




const MongoClient = require('mongodb').MongoClient
const mongoUri = 'mongodb://jbalves:jbalves@meu-dinheiro-shard-00-00-f5tvv.mongodb.net:27017,meu-dinheiro-shard-00-01-f5tvv.mongodb.net:27017,meu-dinheiro-shard-00-02-f5tvv.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=meu-dinheiro-shard-0&authSource=admin'
MongoClient.connect(mongoUri, (err, db) => {
    console.log('MongoClient Connected!')

    const operacao = {
        descricao: 'Salário',
        valor: 10000
    }
    const operacoes = db.collection('operacoes')

    if (operacoes){
        operacoes.update(operacao, (err, res) => {
            console.log(res)
        })
    } else {
        console.log('Falha ao criar collection')        
    }
    
})
