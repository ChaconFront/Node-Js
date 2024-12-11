const fs = require('fs');
console.log('/nAbriendo el archivo/n');

const content = fs.readFileSync('document.txt', 'utf-8');
console.log(content);

console.log('\nHaciendo otra cosa\n');
