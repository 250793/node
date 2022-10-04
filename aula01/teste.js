//CommonJS - prover o import e export os módulos
//Importando o módulo os do node e colocando em uma variavel
const os = require('os')
const { byteToGB } = require('../aula02/convertUnitStorage')
const fs = require('fs')

setInterval(() => {

    const totalMem = parseInt(os.totalmem() / 1024 / 1024)
    const freeMem = parseInt(os.freemem() / 1024 / 1024)
    const percent = parseInt((freeMem / totalMem) * 100)

    const memoria = {
        total: `${totalMem}MB`,
        free: `${freeMem} MB`,
        percent: `${percent} %`,
        totalgb: `${byteToGB(os.totalmem())}`,
        freegb: `${byteToGB(os.freemem())}`




    }
    let dateTime = new Date().toLocaleString();
    let print = `${dateTime} ${JSON.stringify(memoria)}\n`
    console.clear()
    console.table(memoria)
    fs.appendFile(
        './aula02/log.txt',
        print,
        'utf-8',
        () => console.log('Log inserido'))
}, 1000)





// console.log(`Memória Livre: ${freeMem}`,`Total de Memória: ${totalMem}`)
