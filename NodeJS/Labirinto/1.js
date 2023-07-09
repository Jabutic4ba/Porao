var upperNumbers = document.getElementsByClassName('upperh');
var lowerNumbers = document.getElementsByClassName('lowerh');


function lAction(index){
	if(isUp(index)){
		document.getElementsByClassName('lStick')[index].style.display = 'none';
		document.getElementsByClassName('lStickDown')[index].style.display = 'block';
		upperNumbers[index].style.opacity = 0.5;
		lowerNumbers[index].style.opacity = 1;
	}
	else{
		document.getElementsByClassName('lStick')[index].style.display = 'block';
		document.getElementsByClassName('lStickDown')[index].style.display = 'none';
		upperNumbers[index].style.opacity = 1;
		lowerNumbers[index].style.opacity = 0.5;	
	}

	function isUp(i){
		return document.getElementsByClassName('lStick')[i].style.display == 'block';
	}
}

