//Algoritmo de criptografia que embaralha o texto

var txt = Buffer.from('Insoniaa');

var txtString = txt.toString();
if(txt.length % 16 != 0){

	txtString = txtString.padStart(txt.length * 16, 'x');
}
var newtxt = Buffer.from(txtString);
console.log(txt.length % 16);
console.log(newtxt.swap16().toString());