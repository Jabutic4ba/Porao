var diffx = 0;
var diffy = 0;

function magnify(imgID, zoom){
	var img, glass, w, h, bw;
	img = document.getElementById(imgID);

	glass = document.createElement("DIV");
	glass.setAttribute("class", "img-magnifier-glass");

	img.parentElement.insertBefore(glass, img);

	glass.style.backgroundImage = "url('" + img.src + "')";
	glass.style.backgroundRepeat = 'no-repeat';
	glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
	bw = 3;
	w = glass.offsetWidth / 2;
	h = glass.offsetHeight / 2;

	glass.addEventListener("mousemove", moveMagnifier);
	img.addEventListener("mousemove", moveMagnifier);

	glass.addEventListener("touchmove", moveMagnifier);
	img.addEventListener("touchmove", moveMagnifier);
	function moveMagnifier(e){
		var pos, x, y;
		e.preventDefault();
		pos = getCursorPos(e);
		x = pos.x;
		y = pos.y;

		if(x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
		if(x < w / zoom) {x = w / zoom;}
		if(y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
		if(y < h / zoom) {y = h / zoom;}

		glass.style.left = (x - w) + "px";
		glass.style.top = (y - h) + "px";

		glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
	}

	function getCursorPos(e){
		var a, x = 0, y = 0;
		e = e || window.event;

    /* Get the x and y positions of the image: */
        a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left;
        y = e.pageY - a.top;

        diffx = x - 366;
        diffy = y - 226;
        var rx = Math.abs(diffx / 48);
        var ry = Math.abs(diffy / 35);
        var i = Math.round((rx+ry)/2);
        document.getElementById('bg').src = 'strangeAnim/strangeanim' + i + '.PNG';

        console.log('x: ' + x + " " + "y: " + y);
        console.log('x - 366: ' + (x - 366) + ' ' + 'y - 226: ' + (y - 226));
    /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};


	}
}

magnify("bg", 3);



/*switch(diffx){
 case (diffx <= 38 || diffx >= -38) && (diffy <= 25 || diffy >= -25):
 	document.getElementById('bg').src = 'strangeAnim/strangeAnim8'

}*/