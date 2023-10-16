//Algoritmo de criptografia que embaralha o texto

var key = Buffer.from('Era uma vez uma borboleta');
var encaralhado = '';
var arr = [];


var i = 0;
//apresenta na forma decimal
for(x of key.entries()){
	arr.push(String.fromCharCode(x[1]));
	i++;
}

for(var i = 0; i < arr.length - 1;i++){
    rand = Math.round(Math.random() * (arr.length - 1));
	encaralhado += arr[rand];
	var x = arr.splice(rand, 1);
	console.log(x);
	console.log(arr.length);
}

console.log(encaralhado);



//A letra 'r' repetiu mais que o necessário

//As letras estão se repetindo :(

//Dá pra remover um elemento do array? <--- Tem jeito :)


//Verificar arr.length no for
