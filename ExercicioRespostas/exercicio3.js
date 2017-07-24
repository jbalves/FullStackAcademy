const fs = require('fs')
const path = './'

//Dado que a assinatura da função readdir do módulo fs é:
/*
fs.readdir(path, (err, files) => {
    if (err) {
        console.log('ocorreu um erro.')
    } else {
        console.log(files)
    }
})
*/
//Construa uma versão desta função promisified, ou seja, que retorne uma promise. 
//(Será possível chamá-la da seguinte forma: readdirPromise(path).then((files)=> console.log(files)) )
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

readdirPromise(path).then((files)=> console.log(files))