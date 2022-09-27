//CommonJS - prover o import e export os módulos
//Importando o módulo os do node e colocando em uma variavel
const os = require('os')


const totalMem = parseInt(os.totalmem()/1024 /1024)
const freeMem = parseInt(os.freemem()/1024/1024)

const memoria = {
    total:`${totalMem}MB` ,
    free: `${freeMem}`
}
console.clear()
console.table(memoria)

// console.log(`Memória Livre: ${freeMem}`,`Total de Memória: ${totalMem}`)
