//Utilizando o ExpressJS, crie uma rota que some 2 números enviados como parâmetros na URL. 
//Exemplo, ao executar no navegador: http://localhost:3000/somar?num1=10&num2=30 
//deverá ser retornado na tela A soma é: 40.

const express = require('express')
const app = express()

const port = 3000

app.get('/somar', (request,response) => {
    console.log(request.query)
    let soma = 0
    if(request.query.num1 && request.query.num2){
        soma = parseInt(request.query.num1) + parseInt(request.query.num2) 
    }
    response.send('A soma é: '+soma)
})
app.listen(port, () => console.log('Server runnin on '+port))