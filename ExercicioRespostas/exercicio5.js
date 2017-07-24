const fs = require('fs')
function readdir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, paths) => {
            if (err) {
                reject(err)
            } else {
                resolve(paths)
            }
        })
    })
}
function stat(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stat) => {
            if (err) {
                reject(err)
            } else {
                resolve({ path, stat })
            }
        })
    })
}

//Dado a lista de arquivos/diretórios retornada no exercício anterior, mostre quais são arquivos. (utilize fs.stat(caminho, (err, stat) => stat.isFile()) para isso.)

async function listaArquivos() {
    const paths = await readdir('./')
    const statsPromises = paths.map(async (path) => await stat(path))
    const stats = await Promise.all(statsPromises)
    const pathsWithIsFile = stats.map( path => ({ path: path.path, isFile: path.stat.isFile() }) )
    const files = pathsWithIsFile.filter( path => path.isFile)
    console.log(files)
}
listaArquivos()
