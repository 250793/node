const os = require('os')
const fs = require('fs')
const path = require('path')

let usuario = os.userInfo()
const system = os.type()
const pathFile = path.join(__dirname,'index.txt')
console.log(usuario , system);

fs.appendFile(pathFile,
    JSON.stringify(usuario),
    () => console.log('usuario registrado'))

   