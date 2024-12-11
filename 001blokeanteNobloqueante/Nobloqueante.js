const fs = require('fs');
console.log('\nAbriendo el archivo\n');


const content = fs.readFile('document.txt', 'utf-8',function(error,content) {
    console.log(content);
});


console.log('\nHaciendo otra cosa\n');
console.log(process.uptime())