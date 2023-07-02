
function manipulacoes(opcao, objeto, texto){
 if(opcao == "mostrar"){
  document.getElementById(objeto).style.display='block';
 }
 if(opcao == "esconder"){
  document.getElementById(objeto).style.display='none';
 }
 if(opcao == "escrever"){
  document.getElementById(objeto).innerHTML=texto;
 }
 if(opcao == "trocar"){
  document.getElementById(objeto).src=texto;
 }
}