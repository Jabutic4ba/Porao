var upperNumbers = document.getElementsByClassName('upperh');
var lowerNumbers = document.getElementsByClassName('lowerh');




function preloadImages() {
    for(var i = 1;i<38;i++){
      document.getElementById('backg').src = 'headAnim/headAnim' + i + '.png';
    }

}


function playAnim(id){
	var i = 1;
      var p = setInterval(function() {
		i++;

		// create a new Image object
	var img_tag = new Image();

// when preload is complete, apply the image to the div
	img_tag.onload = function() {

    	document.getElementById(id).style.backgroundImage =  "url(headAnim/headAnim" + i + ".PNG)";
	}

// setting 'src' actually starts the preload
	    img_tag.src = "headAnim/headAnim" + i + ".PNG";
		console.log(i);
		if(i == 38){clearInterval(p);}
	}, 50);

}



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

		//senha 01739
		if(upperNumbers[0].style.opacity == 1 && upperNumbers[1].style.opacity == 1 && lowerNumbers[2].style.opacity == 1 && lowerNumbers[4].style.opacity == 1 && upperNumbers[3].style.opacity == 1){
			playAnim('backg');
		}

}

