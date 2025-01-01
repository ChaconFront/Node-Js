const fs= require('node:fs')

readString= fs.createReadStream('./assets/archivo.txt')
writeStream= fs.createWriteStream('./assets/archivo_copia.txt')

readString.pipe(writeStream)
readString.on('data',function(chunk) {
    console.log('He leido:', chunk.length,'caracteres')
})

readString.on('end',function () {
    console.log('Termine de leer el evento')
})