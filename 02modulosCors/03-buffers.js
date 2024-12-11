const buf = new Buffer(100);
const buf2 = new Buffer(26);
(str = '\u00bd + \u00bd +\u00bd'),
  //el metodo write significa escribe.
  buf.write('abcd', 0, 4, 'ascii');
console.log(buf);
console.log(buf, buf.toString('ascii'), str.length,
Buffer.byteLength(str,'utf8')

);
