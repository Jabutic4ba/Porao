//Algoritmo de criptografia que embaralha o texto

var key = Buffer.from('Calma borboleto');


function encaralha(k){
 var encaralhado = ['',''];
 var arr = [];
 var i = 0;
 //apresenta na forma decimal
 for(x of k.entries()){
 	arr.push(String.fromCharCode(x[1]));
	i++;
 }

 var a = arr.length;
 var desKey = [];
 for(var i = 0; i < a;i++){
    rand = Math.round(Math.random() * (arr.length - 1));
	encaralhado[0] += arr[rand];
	desKey.push(rand);
	
	//var x = arr.splice(rand, 1);
 }
 encaralhado[1] = desKey;
 return encaralhado;
}

function desencaralha(text, chave){
 var t = Buffer.from(text);

 var desencaralhado = [];

 for(x of t.entries()){
   console.log(x);
   desencaralhado[chave[x[0]]] = String.fromCharCode(x[1]);
   
 }
 
 return desencaralhado.toString();
}

console.log(desencaralha('mlCeloaol oaomr', [3,11,0,12,2,14,1,10,11,5,10,1,7,3,8]));


//Investigar Buffer.swap16() Buffer.swap32() Buffer.swap64()
//Numeros da chave repetindo