//Algoritmo de criptografia que embaralha o texto
const fs = require('fs');


class Encaralhador{
 constructor(txt, name){
  this.txt = Buffer.from(txt);
  this.name = name;
 }

 Encaralha(type){

  var encaralhado = ['',''];
  var arr = [];


  for(var x of this.txt.entries()){
 	arr.push(String.fromCharCode(x[1]));

  }


  const desKey = [];
  let deskeyHEX = '';
  for(var i = 0; i < arr.length;i++){

    var rand = Math.round(Math.random() * (arr.length-1));

	while(desKey.indexOf(rand) != -1){
		rand = Math.round(Math.random() * (arr.length-1));
		if(arr.length == 0){break;}
	}

   encaralhado[0] += arr[rand];
   desKey.push(rand);

  }
  encaralhado[1] = desKey;
  for(let x in desKey){
  	deskeyHEX += x == desKey.length-1 ? desKey[x].toString(16) : desKey[x].toString(16) + '-';
  }

  if(type == 'hex'){
   console.log('Texto: ' + Buffer.from(encaralhado[0]).toString('hex') + ' || ' + ' Chave: ' + encaralhado[1] + '\nChaveHEX: ' + deskeyHEX);
   encaralhado[0] = Buffer.from(encaralhado[0]).toString('hex')
  }
  else{
  	console.log('Texto: ' + encaralhado[0] + ' || ' + ' Chave: ' + encaralhado[1]);
  }

  const obj = {plainText: this.txt.toString(), crypt: encaralhado[0], key: deskeyHEX, format: type};
  const json = JSON.stringify(obj);
  fs.writeFileSync(this.name + '.json', json);
 }

 Desencaralha(s){
  const keyInfo = JSON.parse(fs.readFileSync(this.name + '.json', 'utf8'));
  keyInfo.key = keyInfo.key.split('-');
  var desentxt = '';
  if(keyInfo.format == 'hex'){
  	var z = [];
  	var endtxt = []
  	for(var i = 0; i < keyInfo.crypt.length;i+=2){
  		z.push(keyInfo.crypt.substr(i, 2));
  	}

  	for(var q = 0;q < z.length;q++){
  	    endtxt[parseInt(keyInfo.key[q], 16)] = z[q];

  	}

    if(s == 'utf-8'){
    	for(var i = 0;i < z.length;i++){
    		desentxt += String.fromCharCode(parseInt(endtxt[i], 16)).toString();
    	}
    }
    else{
    	for(var p = 0;p<z.length;p++){
     		desentxt += endtxt[p];
     	}
   }
  }
  else{
   var t = Buffer.from(keyInfo.crypt);
   const d = [];

   for(var x of t.entries()){
     d[parseInt(keyInfo.key[x[0]], 16)] = String.fromCharCode(x[1]);
   
   }
   for(var i = 0;i<d.length;i++){
 	 desentxt += d[i];
   }
  }
  console.log(desentxt);  	
 }


}

var key = new Encaralhador('Tava no fluxo e avistei a menina no grau', 'grau');
var key2 = new Encaralhador('mi primera chamba', 'chamba');

//key2.Encaralha('hex');
key2.Desencaralha('utf-8');


