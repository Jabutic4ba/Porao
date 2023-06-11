var counter = 0;
var counterTotal = 0;
var vomitou = false;


function hide(id){
counter++;
counterTotal++;
document.getElementById(id).style.display='none';
if(counter >= 4){
 document.getElementById('head').style.display='block';
 document.getElementById('r').style.display='block';
 if(vomitou == true){
  document.getElementById('head').innerHTML = "EEEECAAAAAAA!!!";
  document.getElementById('vumito').style.display='block';
  document.getElementById('pvumito').style.display='block';
  document.getElementById('choro').style.display='block';
  
  document.getElementById('r').style.display='none';
 }
}

}

function show(){

 if(counterTotal <= 8){
  document.getElementById('demo').style.display='block';
  document.getElementById('demo2').style.display='block';
  document.getElementById('demo3').style.display='block';
  document.getElementById('demo4').style.display='block';

  document.getElementById('head').style.display='none';
  document.getElementById('r').style.display='none';
  counter=0;
 }
 else if(counterTotal == 12){
  counter=0;
  document.getElementById('head').style.display='block';
  document.getElementById('head').innerHTML='Nao coma tantas macas, pois te ocasionara uma bela de uma gastrite!!!';
  document.getElementById('r').style.display='none';

  document.getElementById('doctor').style.display='block';
  document.getElementById('fodace').style.display='block';
  document.getElementById('btdb').style.display='block';
  
 }

}

function vaiVomitar(){
  document.getElementById('head').style.display='none';
  document.getElementById('doctor').style.display='none';
  document.getElementById('fodace').style.display='none';
  document.getElementById('voltartdb').style.display='none';
  document.getElementById('btdb').style.display='none';


  document.getElementById('demo').style.display='block';
  document.getElementById('demo2').style.display='block';
  document.getElementById('demo3').style.display='block';
  document.getElementById('demo4').style.display='block';
  vomitou = true;

}

function chamaToga(){
  document.getElementById('head').style.display = "none";
  document.getElementById('vumito').style.display='none';
  document.getElementById('pvumito').style.display='none';
  document.getElementById('choro').style.display='none';

  document.getElementById('toguro').style.display='block';
  document.getElementById('pleno').style.display='block';
  document.getElementById('carinha').style.display='block';

}

function voltaInicio(){
  document.getElementById('toguro').style.display = "none";
  document.getElementById('pleno').style.display='none';
  document.getElementById('carinha').style.display='none';
  document.getElementById('ptdb').style.display='none';
  document.getElementById('btdb').style.display='none';
  document.getElementById('itdb').style.display='none';
  document.getElementById('voltartdb').style.display='none';

  document.getElementById('demo').style.display='block';
  document.getElementById('demo2').style.display='block';
  document.getElementById('demo3').style.display='block';
  document.getElementById('demo4').style.display='block';
  counter=0;
  counterTotal=0;
  vomitou = false;
  document.getElementById('head').innerHTML="Guloso '-'";

}

function tdb(){
 document.getElementById('itdb').style.display='block';
 document.getElementById('ptdb').style.display='block';
 document.getElementById('voltartdb').style.display='block';
 
 

 document.getElementById('btdb').style.display='none';
 document.getElementById('head').style.display='none';
 document.getElementById('doctor').style.display='none';
 document.getElementById('fodace').style.display='none'; 

}