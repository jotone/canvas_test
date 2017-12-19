function toRad(angle){
	return angle * Math.PI / 180;
}
function toDeg(angle){
	return angle * (180 / Math.PI);
}


var objSol = {
	mass: 1000,
	color: '#ffffff',
	v: 0
}

var obj1 = {
	mass: 20,
	color: '#ee0000',
	v: 0,
	coords: {
		x: 400,
		y: 100
	},
	dirAng: toRad(190)
};

screen = {
	x: 1000,
	y: 1000,
	cX: 500,
	cY: 500
};

var G = 6.67408 * Math.pow(10, -11);

$(document).ready(function() {
//Settings
	var canvasBg = document.getElementById('background-layer');
	var ctxBg = canvasBg.getContext('2d');

	var canvasPlanet1 = document.getElementById('planet1');

	var ctxPl= [
		canvasPlanet1.getContext('2d')
	];

//background layer
	// Draw grid
	for (var x = 0; x < screen.x; x = x + 50) {
		ctxBg.beginPath();
		ctxBg.strokeStyle = 'rgba(255, 255, 255, 0.2)';
		ctxBg.lineWidth = '1';
		ctxBg.moveTo(x, 0);
		ctxBg.lineTo(x, screen.x);
		ctxBg.stroke();
		ctxBg.beginPath();
		ctxBg.strokeStyle = 'rgba(255, 255, 255, 0.2)';
		ctxBg.lineWidth = '1';
		ctxBg.moveTo(0, x);
		ctxBg.lineTo(screen.x, x);
		ctxBg.stroke();
	}
	for(var i = 50; i<1000; i=i+50){
		$('.main').append('<span class="coord-x" style="left: '+i+'px">'+(i)+'</span>');
	}
	for(var i = 50; i<1000; i=i+50){
		$('.main').append('<span class="coord-y" style="top: '+(i-14)+'px">'+(i)+'</span>');
	}
// /background layer

//Draw star
	ctxBg.beginPath();
	ctxBg.arc(screen.cX, screen.cY, 10, 0, 2* Math.PI, true);
	ctxBg.fillStyle = objSol.color;
	ctxBg.fill();
	ctxBg.closePath();
// /Draw star

//Draw planet
	ctxPl[0].beginPath();
	ctxPl[0].arc(obj1.coords.x, obj1.coords.y, 5, 0, 2* Math.PI, true);
	ctxPl[0].fillStyle = obj1.color;
	ctxPl[0].fill();
	ctxPl[0].closePath();
// / Draw planet
});