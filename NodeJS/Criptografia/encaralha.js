//Algoritmo de criptografia que embaralha o texto
const fs = require('fs');
const readline = require('node:readline');

class Encaralhador{
 constructor(txt){
  this.txt = Buffer.from(txt);
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
   console.log('Texto: ' + Buffer.from(encaralhado[0]).toString('hex'));
   encaralhado[0] = Buffer.from(encaralhado[0]).toString('hex')
  }
  else{
  	console.log('Texto: ' + encaralhado[0]);
  }

  const obj = {plainText: this.txt.toString(), crypt: encaralhado[0], key: deskeyHEX, format: type};
  const json = JSON.stringify(obj);
  fs.writeFileSync(deskeyHEX + '.json', json);
 }

 Desencaralha(s, key){
  const keyInfo = JSON.parse(fs.readFileSync(key + '.json', 'utf8'));
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

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

var resposta;

rl.question("O que quer fazer? \n 1.Criptografar um texto \n 2.Descriptografar um texto \n", r => {
    resposta = r;
	if(r == 1){
     rl.question("Digite o texto \n", texto => {
      rl.question("Como deseja a saída? \n 1.Utf-8 \n 2.Hexadecimal\n", r2 => {
       if(r2 == 1){
        const key = new Encaralhador(texto);
        key.Encaralha('utf-8');
        rl.close();
       }
       else if(r2 == 2){
        const key = new Encaralhador(texto);
        key.Encaralha('hex');
        rl.close();
       }
      });
     });	
	}
	else if(r == 2){
      rl.question("Digite o texto criptografado\n", textoCript => {
       rl.question("Digite a chave\n", chave => {
        const keyInfo = JSON.parse(fs.readFileSync(chave + '.json'));
        const key = new Encaralhador(keyInfo.plainText);
        rl.question("Como deseja a saída?\n 1.Utf-8 \n 2.Hexadecimal\n", r2 =>{
         if(r2 == 1){
          key.Desencaralha('utf-8', chave);
          rl.close();
         }
         else if(r2 == 2){
          key.Desencaralha('hex', chave);
          rl.close();	
         }
        });
       });
      });	    
	}
});


