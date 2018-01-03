screen = {
	x: 1000,
	y: 1000,
	cX: 500,
	cY: 500
};

function getDistance(objA, objB){
	return Math.sqrt(Math.pow(objB.coords.x - objA.coords.x, 2) + Math.pow(objB.coords.y - objA.coords.x, 2));
}

function escapeVelocity(objA, R){
	return Math.sqrt(G * objA.mass / R);
}

function toRad(angle){
	return angle * (Math.PI / 180);
}
function toDeg(angle){
	return angle * (180 / Math.PI);
}
function pow(x, n){
	return Math.pow(x, n);
}
function sqrt(x){
	return Math.sqrt(x);
}

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
	// / Draw grid
// /background layer

	var obj = [
		{
			x: 25,
			y: 25,
			mod: 120
		},
		{
			x: -50,
			y: 50,
			mod: 34
		},
		{
			x: 0,
			y: -75,
			mod: 56
		},
		{
			x: -100,
			y: -100,
			mod: 13
		},
		{
			x: -105,
			y: 145,
			mod: 72
		}
	]

	//Draw center
	ctxPl[0].beginPath();
	ctxPl[0].arc(screen.cX, screen.cY, 10, 0, 2*Math.PI, true);
	ctxPl[0].fillStyle = '#ee0';
	ctxPl[0].fill();
	ctxPl[0].closePath();

	for(var i in obj){
		//Draw obj
		ctxPl[0].beginPath();
		ctxPl[0].arc(screen.cX + obj[i].x, screen.cY - obj[i].y, 5, 0, 2*Math.PI, true);
		ctxPl[0].fillStyle = '#e00';
		ctxPl[0].fill();
		ctxPl[0].closePath();

		//Draw radius
		ctxPl[0].beginPath();
		ctxPl[0].moveTo(screen.cX, screen.cY);
		ctxPl[0].strokeStyle = '#fff';
		ctxPl[0].lineWidth = '1';
		ctxPl[0].lineTo(screen.cX + obj[i].x, screen.cY - obj[i].y);
		ctxPl[0].stroke();
		ctxPl[0].closePath();

		var OA = {
			x: obj[i].x,
			y: obj[i].y,
			mod: sqrt( pow(obj[i].x, 2) + pow(obj[i].y, 2) )
		}

		var OB = {
			x: 0,
			y: OA.y,
			mod: OA.y
		}

		var degBOA = Math.acos(OB.mod/OA.mod);

		var OC = {
			mod: sqrt( pow(OA.mod, 2) + pow(obj[i].mod,2) )
		}

		var degAOC = Math.asin(obj[i].mod / OC.mod);

		OC.x = (obj[i].x > 0)
			? OC.mod * Math.sin(degAOC + degBOA)
			: OC.x = OC.mod * Math.sin(degAOC - degBOA);
		OC.y = (obj[i].x > 0)
			? OC.mod * Math.cos(degAOC + degBOA)
			: OC.y = OC.mod * Math.cos(degAOC - degBOA);

		//Draw velocity
		ctxPl[0].beginPath();
		ctxPl[0].moveTo(screen.cX + obj[i].x, screen.cY - obj[i].y);
		ctxPl[0].strokeStyle = '#fff';
		ctxPl[0].lineWidth = '1';
		ctxPl[0].lineTo(screen.cX + OC.x, screen.cY - OC.y);
		ctxPl[0].stroke();
		ctxPl[0].closePath();
	}
});