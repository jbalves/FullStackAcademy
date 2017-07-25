const fs = require('fs')

//callback
/*
fs.readFile('exemplo1.js', (err, data) => {
    console.log(err, data)
})
*/

function lerArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        fs.readFile(arquivo, (err, content) => {
            if(err){
                reject(err)
            } else {
                resolve(content)
            }
        })
    })
}

async function pegarConteudo(arquivo) {
    try{
        const content = await lerArquivo(arquivo+1)
        console.log('constent', content)
        const content2 = await lerArquivo('assincronismo.js')
        console.log('content2', content2)
    }catch(e){
        console.log(e)
    }
    
}
pegarConteudo('exemplo1.js')
/*
lerArquivo('exemplo1.js')
    .then((content) => console.log(content))
*/

console.log('=================opa')
