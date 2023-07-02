const numbers = [];

function randomnumbers(){ 
 for(let i = 1;i <= 60;i++){
  randomNumber = Math.floor(Math.random() * 60) + 1;
  
  for(let z = 1; z <= numbers.length; z++){
   if(numbers[z] == randomNumber){
    randomNumber = Math.floor(Math.random() * 60) + 1;
    z=0;  
    continue;  
   }

  } 
  numbers[i] = randomNumber;
 }

} 

randomnumbers();



var contN = 1;
function revealNumber(r, c){
 if(contN<=6){
  contN++;
  document.getElementById("tnumeros").rows[r].cells[c].style.backgroundColor = "black";
  if(r == 1 && c == 0){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[1];}
  if(r == 1 && c == 1){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[2];}
  if(r == 1 && c == 2){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[3];}
  if(r == 1 && c == 3){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[4];}
  if(r == 1 && c == 4){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[5];}
  if(r == 1 && c == 5){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[6];}
  if(r == 1 && c == 6){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[7];}
  if(r == 1 && c == 7){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[8];}
  if(r == 1 && c == 8){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[9];}
  if(r == 1 && c == 9){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[10];}
  if(r == 2 && c == 0){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[11];}
  if(r == 2 && c == 1){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[12];}
  if(r == 2 && c == 2){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[13];}
  if(r == 2 && c == 3){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[14];}
  if(r == 2 && c == 4){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[15];}
  if(r == 2 && c == 5){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[16];}
  if(r == 2 && c == 6){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[17];}
  if(r == 2 && c == 7){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[18];}
  if(r == 2 && c == 8){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[19];}
  if(r == 2 && c == 9){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[20];}
  if(r == 3 && c == 0){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[21];}
  if(r == 3 && c == 1){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[22];}
  if(r == 3 && c == 2){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[23];}
  if(r == 3 && c == 3){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[24];}
  if(r == 3 && c == 4){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[25];}
  if(r == 3 && c == 5){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[26];}
  if(r == 3 && c == 6){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[27];}
  if(r == 3 && c == 7){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[28];}
  if(r == 3 && c == 8){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[29];}
  if(r == 3 && c == 9){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[30];}
  if(r == 4 && c == 0){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[31];}
  if(r == 4 && c == 1){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[32];}
  if(r == 4 && c == 2){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[33];}
  if(r == 4 && c == 3){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[34];}
  if(r == 4 && c == 4){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[35];}
  if(r == 4 && c == 5){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[36];}
  if(r == 4 && c == 6){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[37];}
  if(r == 4 && c == 7){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[38];}
  if(r == 4 && c == 8){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[39];}
  if(r == 4 && c == 9){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[40];}
  if(r == 5 && c == 0){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[41];}
  if(r == 5 && c == 1){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[42];}
  if(r == 5 && c == 2){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[43];}
  if(r == 5 && c == 3){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[44];}
  if(r == 5 && c == 4){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[45];}
  if(r == 5 && c == 5){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[46];}
  if(r == 5 && c == 6){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[47];}
  if(r == 5 && c == 7){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[48];}
  if(r == 5 && c == 8){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[49];}
  if(r == 5 && c == 9){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[50];}
  if(r == 6 && c == 0){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[51];}
  if(r == 6 && c == 1){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[52];}
  if(r == 6 && c == 2){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[53];}
  if(r == 6 && c == 3){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[54];}
  if(r == 6 && c == 4){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[55];}
  if(r == 6 && c == 5){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[56];}
  if(r == 6 && c == 6){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[57];}
  if(r == 6 && c == 7){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[58];}
  if(r == 6 && c == 8){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[59];}
  if(r == 6 && c == 9){document.getElementById("tnumeros").rows[r].cells[c].innerHTML = numbers[60];}
 }
 
}

function voltaInicio(){
 if(contN < 6){
  alert("Tem certeza? Ainda nao escolheu 6 numeros.");
 }
 else{
  location.reload();
 }
}
