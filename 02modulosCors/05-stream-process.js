/*stdin y stdout nos va a permitir la interaccion del usuario con la terminal de comandos */

const stdin = process.stdin;
stdout = process.stdout;
person = {
  name: null,
  age: 0
};

function saveAge(age) {}

function saveName(name) {}

function quiz(question, callback) {
    stdin.resume(), //me permite leer lo que el usuario escriba en la terminal de comandos
    stdout.write(question + ':');
  stdin.once('data', function (res) {
    callback(res.toString().trim());
  });
}

stdin.setEncoding('utf-8'); //todo lo que entre a la terminal de comando se va a codificar en este formato.
                           
quiz('Como te llamas', saveName);
