//Algoritmo de criptografia que embaralha o texto

var key = Buffer.from('Tava no fluxo e avistei menina no grau');


function encaralha(k){
 var encaralhado = ['',''];
 var arr = [];

 //apresenta na forma decimal
 for(x of k.entries()){
 	arr.push(String.fromCharCode(x[1]));

 }


 var desKey = [];
 for(var i = 0; i < arr.length;i++){

    rand = Math.round(Math.random() * arr.length -1);

	while(desKey.indexOf(rand) != -1){
		rand = Math.round(Math.random() * arr.length -1);
		if(arr.length == 0){break;}
	}
	
    encaralhado[0] += arr[rand];
	desKey.push(rand);

 }
 encaralhado[1] = desKey;
 return 'Texto: ' + encaralhado[0] + ' || ' + ' Chave: ' + encaralhado[1];
}

function desencaralha(text, chave){
 var t = Buffer.from(text);

 const d = [];
 var desentxt = '';

 for(x of t.entries()){

   d[chave[x[0]]] = String.fromCharCode(x[1]);
   
 }
 for(var i = 0;i<d.length;i++){
 	desentxt += d[i];
 }

 return desentxt;
}

console.log(desencaralha('ovoeateisnaa eifniuTra  nlg u xn  vmoa', [32,2,12,14,3,20,21,27,19,5,1,29,33,25,18,8,31,22,10,0,35,16,30,7,28,9,34,4,37,13,11,26,15,23,17,24,6,36]));
//console.log(encaralha(key));


//Investigar Buffer.swap16() Buffer.swap32() Buffer.swap64()
