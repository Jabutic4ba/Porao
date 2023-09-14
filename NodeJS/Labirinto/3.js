var chestclick = 0;
function openChest(){
 document.getElementById('chest').style.backgroundImage = "url('chestOpenwh.PNG')";
 if(chestclick == 1){
  document.getElementById('chest').style.backgroundImage = "url('chestOpen.PNG')";
  document.getElementById('chest').classList.remove("chest");
  document.getElementsByClassName('slots')[1].style.backgroundImage = "url('cutoff.PNG')";
 }
 
 chestclick++;
}

function playAxe(){
	var i = 0;
	var anim = setInterval(function(){
		
		i++;

		document.getElementById('axeimg').src='axeAnim/axeAnim' + i + '.PNG';
		if(i == 9){clearInterval(anim);}
	},50);
	document.getElementById('axe').style.display = 'none';

}