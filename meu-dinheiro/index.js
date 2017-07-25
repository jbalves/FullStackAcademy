const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Fullstack Academy!')
})

app.listen(port, () => console.log('Server running...'))

//yarn, conseguimos baixar os modulos do npm
//o facebook criou o yarn para cachear e resolver problemas que o npm tem