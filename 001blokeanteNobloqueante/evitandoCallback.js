const fs = require('fs');
console.log('\nAbriendo el archivo\n');

function imprimir(error,content) {
    console.log(content)
}

const content = fs.readFile('document.txt', 'utf-8',imprimir);


console.log('\nHaciendo otra cosa\n');
console.log(process.uptime())