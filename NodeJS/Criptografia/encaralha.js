//Algoritmo de criptografia que embaralha o texto

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


  var desKey = [];
  for(var i = 0; i < arr.length;i++){

    var rand = Math.round(Math.random() * (arr.length-1));

	while(desKey.indexOf(rand) != -1){
		rand = Math.round(Math.random() * (arr.length-1));
		if(arr.length == 0){break;}
	}

   rand = Math.round(Math.random() * arr.length -1);

   while(desKey.indexOf(rand) != -1){
    rand = Math.round(Math.random() * arr.length -1);
    if(arr.length == 0){break;}
   }

	
   encaralhado[0] += arr[rand];
   desKey.push(rand);

  }
  encaralhado[1] = desKey;
  if(type == 'hex'){
   console.log('Texto: ' + Buffer.from(encaralhado[0]).toString('hex') + ' || ' + ' Chave: ' + encaralhado[1]);
  }
  else{
  	console.log('Texto: ' + encaralhado[0] + ' || ' + ' Chave: ' + encaralhado[1]);
  }
 }

 Desencaralha(text, chave, type, s){
  var desentxt = '';
  if(type == 'hex'){
  	var z = [];
  	var endtxt = []
  	for(var i = 0; i < text.length;i+=2){
  		z.push(text.substr(i, 2));
  	}
  	for(var q = 0;q < z.length;q++){
  		endtxt[chave[q]] = z[q];
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
   var t = Buffer.from(text);

   const d = [];

   for(var x of t.entries()){
     console.log(x);
     d[chave[x[0]]] = String.fromCharCode(x[1]);
   
   }
   for(var i = 0;i<d.length;i++){
 	 desentxt += d[i];
   }
  }
  console.log(desentxt);  	
 }


}

var key = new Encaralhador('Tava no fluxo e avistei a menina no grau');
var key2 = new Encaralhador('mi primera chamba');

//key.Encaralha();
//key.Desencaralha('ensua rofoat  Tgnoinv amiela na  vxiea u', [27,33,19,10,3,25,37,12,8,6,38,20,35,4,0,36,5,34,29,28,17,7,16,26,18,14,9,31,32,30,24,23,15,2,11,22,21,1,13,39]);
//key2.Encaralha('hex');
key2.Desencaralha('7261636d61696570616d72206269206d68', [8,16,11,6,9,1,7,3,13,14,4,10,15,5,2,0,12], 'hex', 'utf-8');
//Investigar Buffer.swap16() Buffer.swap32() Buffer.swap64()
