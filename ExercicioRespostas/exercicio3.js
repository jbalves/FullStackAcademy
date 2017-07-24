const fs = require('fs')
const path = './'
fs.readdir(path, (err, files) => {
  if(err){
    console.log('ocorreu um erro.')
  }else{
    console.log(files)
  }
})