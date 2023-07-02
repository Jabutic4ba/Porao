var row;
var row2;
var colum;
var colum2;
var randomSort;
var randomSort2;

var contRed = 0;
var cont = 0;
var currentLevel = "myTable";


var fimDeJogo = false;


function randomSortLevel(){
 switch(currentLevel){
  case "myTable":
   randomSort = Math.floor(Math.random() * 4);
   console.log(randomSort);
   break;

  case "tnivelDois":
   randomSort = Math.floor(Math.random() * 9);
   console.log(randomSort);
   break;

  case "tnivelTres":
   randomSort = Math.floor(Math.random() * 16);
   console.log(randomSort);
   break;

  case "tnivelQuatro":
   randomSort = Math.floor(Math.random() * 16);
   console.log(randomSort);
   console.log(randomSort2);
   break;
 }
}

randomSortLevel();


function changeColor(r, c){
 defRowColum();



 if((row == r && colum == c) || (row2  == r && colum2 == c)){
  if(currentLevel != "tnivelQuatro"){fimDeJogo = true;}
  document.getElementById(currentLevel).rows[r].cells[c].style.backgroundColor = "red";
  if(currentLevel != "tnivelQuatro"){
   if(!coold){
    cooldown();
   }
  }
  else{
   contRed++;
   if(contRed == 1 && cont < 14 && !coold){cooldown();fimDeJogo = true;}
   else if(contRed == 2 && !coold ){cooldown();fimDeJogo = true;}
  }
 }
 else if(fimDeJogo == false){
  if(document.getElementById(currentLevel).rows[r].cells[c].style.backgroundColor != "black"){
   cont++;
   console.log("entrou ifFim");
  }
  document.getElementById(currentLevel).rows[r].cells[c].style = "background-color: black";
  console.log("entrou bacl");
 }
 
}


function defRowColum(){
 //enxugar esse bloco?
 switch(currentLevel){
  case "myTable":
   switch(randomSort){
    case 3:
     row = 2;
     colum = 1;
     break;

    case 2:
     row = 2;
     colum = 0;
     break;

    case 1:
     row = 1;
     colum = 1;
     break;

    case 0:
     row = 1;
     colum = 0;
     break;
   }
  break;

  case "tnivelDois":
   switch(randomSort){
    case 8:
     row = 3;
     colum = 2;
     break;

    case 7:
     row = 3;
     colum = 1;
     break;

    case 6:
     row = 3;
     colum = 0;
     break;

    case 5:
     row = 2;
     colum = 2;
     break;

    case 4:
     row = 2;
     colum = 1;
     break;

    case 3:
     row = 2;
     colum = 0;
     break;

    case 2:
     row = 1;
     colum = 2;
     break;

    case 1:
     row = 1;
     colum = 1;
     break;

    case 0:
     row = 1;
     colum = 0;
     break;

   }
  break;


  case "tnivelTres":
   switch(randomSort){
    case 15:
     row = 4;
     colum = 3;
     break;

    case 14:
     row = 4;
     colum = 2;
     break;

    case 13:
     row = 4;
     colum = 1;
     break;

    case 12:
     row = 4;
     colum = 0;
     break;

    case 11:
     row = 3;
     colum = 3;
     break;

    case 10:
     row = 3;
     colum = 2;
     break;

    case 9:
     row = 3;
     colum = 1;
     break;

    case 8:
     row = 3;
     colum = 0;
     break;

    case 7:
     row = 2;
     colum = 3;
     break;

    case 6:
     row = 2;
     colum = 2;
     break;

    case 5:
     row = 2;
     colum = 1;
     break;

    case 4:
     row = 2;
     colum = 0;
     break;

    case 3:
     row = 1;
     colum = 3;
     break;

    case 2:
     row = 1;
     colum = 2;
     break;

    case 1:
     row = 1;
     colum = 1;
     break;

    case 0:
     row = 1;
     colum = 0;
     break;

   }
  break;

  case "tnivelQuatro":
   switch(randomSort){
    case 15:
     row = 4;
     colum = 3;
     break;

    case 14:
     row = 4;
     colum = 2;
     break;

    case 13:
     row = 4;
     colum = 1;
     break;

    case 12:
     row = 4;
     colum = 0;
     break;

    case 11:
     row = 3;
     colum = 3;
     break;

    case 10:
     row = 3;
     colum = 2;
     break;

    case 9:
     row = 3;
     colum = 1;
     break;

    case 8:
     row = 3;
     colum = 0;
     break;

    case 7:
     row = 2;
     colum = 3;
     break;

    case 6:
     row = 2;
     colum = 2;
     break;

    case 5:
     row = 2;
     colum = 1;
     break;

    case 4:
     row = 2;
     colum = 0;
     break;

    case 3:
     row = 1;
     colum = 3;
     break;

    case 2:
     row = 1;
     colum = 2;
     break;

    case 1:
     row = 1;
     colum = 1;
     break;

    case 0:
     row = 1;
     colum = 0;
     break;

   }
   while(randomSort2 == randomSort){randomSort2 = Math.floor(Math.random() * 16);}
   switch(randomSort2){
    case 15:
     row2 = 4;
     colum2 = 3;
     break;

    case 14:
     row2 = 4;
     colum2 = 2;
     break;
 
    case 13:
     row2 = 4;
     colum2 = 1;
     break;

    case 12:
     row2 = 4;
     colum2 = 0;
     break;

    case 11:
     row2 = 3;
     colum2 = 3;
     break;

    case 10:
     row2 = 3;
     colum2 = 2;
     break;

    case 9:
     row2 = 3;
     colum2 = 1;
     break;

    case 8:
     row2 = 3;
     colum2 = 0;
     break;

    case 7:
     row2 = 2;
     colum2 = 3;
     break;

    case 6:
     row2 = 2;
     colum2 = 2;
     break;

    case 5:
     row2 = 2;
     colum2 = 1;
     break;

    case 4:
     row2 = 2;
     colum2 = 0;
     break;

    case 3:
     row2 = 1;
     colum2 = 3;
     break;

    case 2:
     row2 = 1;
     colum2 = 2;
     break;

    case 1:
     row2 = 1;
     colum2 = 1;
     break;

    case 0:
     row2 = 1;
     colum2 = 0;
     break;
    }
  break;
 }
}

var a;
var i = 2;
var coold = false;
function cooldown(){
 coold = true;
 console.log("fdj true");
 a = setInterval(function(){ganhouPerdeu()}, 1000); 
}



var ganhou = false;
function ganhouPerdeu(){
 if(i>0){
  //enxugar esse bloco?
  if(currentLevel == "tnivelQuatro"){
   if(cont == 14){
    ganhou = true;
    console.log("oi2");

   }
   else{
    console.log("oi");
    document.getElementById("perdeuQuatro").innerHTML= "Reiniciando... " + i;
   }
  }

  if(currentLevel == "tnivelTres"){
   if(cont == 15){
    ganhou = true;
    console.log("oi2");

   }
   else{
    console.log("oi");
    document.getElementById("perdeuTres").innerHTML= "Reiniciando... " + i;
   }
  }

  if(currentLevel == "tnivelDois"){
   if(cont == 8){
    ganhou = true;
    console.log("oi2");

   }
   else{
    console.log("oi");
    document.getElementById("perdeuDois").innerHTML= "Reiniciando... " + i;
   }
  }

  if(currentLevel == "myTable"){
   if(cont == 3){
    ganhou = true;
   }
   else{
    document.getElementById("perdeu").innerHTML= "Reiniciando... " + i;
   }
  }
  i--;
 }
 else{
  coold = false;
  i=2;
  console.log("fdj falso");
  if(ganhou){
   cont=0;
   //Enxugar esse bloco?
   if(currentLevel == "tnivelQuatro"){
    currentLevel="tnumeros";
    manipulacoes("esconder", "nivelQuatro");
    manipulacoes("mostrar", "numeros");
    fimDeJogo = false;
    randomSortLevel();
    clearInterval(a);
    ganhou=false;
   }

   if(currentLevel == "tnivelTres"){
    currentLevel="tnivelQuatro";
    manipulacoes("esconder", "nivelTres");
    manipulacoes("mostrar", "nivelQuatro");
    fimDeJogo = false;
    randomSort2 = Math.floor(Math.random() * 16);
    randomSortLevel();
    clearInterval(a);
    ganhou=false;
   }

   if(currentLevel == "tnivelDois"){
    currentLevel="tnivelTres";
    manipulacoes("esconder", "nivelDois");
    manipulacoes("mostrar", "nivelTres");
    fimDeJogo = false;
    randomSortLevel();
    clearInterval(a);
    ganhou=false;
   }

   if(currentLevel == "myTable"){
    manipulacoes("esconder", "divTable");
    manipulacoes("mostrar", "nivelDois");
    fimDeJogo = false;
    clearInterval(a);
    ganhou=false;
    currentLevel = "tnivelDois";
    randomSortLevel();
   }
  }
  else{
   fimDeJogo = false;
   location.reload();
  }
 }
}
