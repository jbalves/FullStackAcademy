const fs = require('fs')
const path = './'

// Construa uma função async que utiliza a função readdirPromise com await e escreva no console a lista de arquivos/diretórios retornados.
function readdirPromise(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err)
            } else {
                resolve(files)
            }
        })
    })
}

async function arquivosDiretorios(path){
    try{
        const paths = await readdirPromise(path)
        console.log(paths)
    }catch(e){
        console.log(e)
    }
}

arquivosDiretorios(path)