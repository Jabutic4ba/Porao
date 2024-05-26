class Temporizador{
 constructor(display){
  this.display = display;
  this.temporizador = undefined;
  this.ligado = false;
  this.segundos = 0;
  this.minutos = 0;
  this.reset;
 }
 
 stop(){
  clearInterval(this.temporizador);
 }

 on(h, m, s, func, noFinal){
  this.ligado = true;
  this.segundos = s;
  this.minutos = m;
  this.horas = h;

  const fsegundo = this.segundos > 9 ? this.segundos : "0" + this.segundos;
  const fminuto = this.minutos > 9 ? this.minutos : "0" + this.minutos;
  const fhora = this.horas > 9 ? this.horas : "0" + this.horas;

  if(this.display){
   this.display.innerHTML = fhora + ":" + fminuto + ":" + fsegundo;
  }

  this.temporizador = setInterval(()=>{
   if(func){func();}
   const fsegundo = this.segundos > 9 ? this.segundos : "0" + this.segundos;
   const fminuto = this.minutos > 9 ? this.minutos : "0" + this.minutos;
   const fhora = this.horas > 9 ? this.horas : "0" + this.horas;
   

   if(this.display){
    this.display.innerHTML = fhora + ":" + fminuto + ":" + fsegundo;
   }

   if(this.horas == 0 && this.minutos == 0 && this.segundos == 0){
    this.ligado = false;
    if(noFinal) noFinal();
    clearInterval(this.temporizador);
   }

   if(this.segundos == 0){
    this.segundos = 60;
    if(this.minutos > 0){
     this.minutos--;
    }
   }

   this.segundos--;

  }, 1000);

 }

}

function manipulacoes(opcao, objeto, texto){
 if(opcao == "mostrar"){
  document.getElementById(objeto).style.display='block';
 }
 if(opcao == "esconder"){
  document.getElementById(objeto).style.display="none";
 }
 if(opcao == "escrever"){
  document.getElementById(objeto).innerHTML=texto;
 }
 if(opcao == "trocar"){
  document.getElementById(objeto).src=texto;
 }
}
