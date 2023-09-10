function openChest(){
 document.getElementById('chest').style.backgroundImage = "url('chestOpen.PNG')";
}

function playAxe(){
	var i = 0;
	var anim = setInterval(function(){
		
		i++;
		console.log(i);
		document.getElementById('axeimg').src='axeAnim/axeAnim' + i + '.PNG';
		if(i == 9){clearInterval(anim);}
	},50);
}