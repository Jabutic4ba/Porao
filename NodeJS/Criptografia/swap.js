//Algoritmo de criptografia que embaralha o texto

var txt = Buffer.from('Insonia');

var txtString = txt.toString();
txtString = txtString.padStart(16, 'x');
var newtxt = Buffer.from(txtString);

console.log(newtxt.toString());