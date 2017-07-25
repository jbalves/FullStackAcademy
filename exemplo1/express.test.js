const express = require('express')
const app = express()

const port = 3000

app.get('/', (request,response) => {
    console.log(request.query)
    let nome = ''
    if(request.query && request.query.nome){
        nome = ', olá '+request.query.nome
    }
    response.send('Fullstack Academy with Express'+nome)
})
app.listen(port, () => console.log('Server runnin on '+port))