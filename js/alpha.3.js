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

	$('button[name=accept]').click(function(){
		if(
			($('input[name=x]').val().length > 0) &&
			($('input[name=y]').val().length > 0) &&
			($('input[name=vel]').val().length > 0)
		){
			var obj = {
				x: parseInt($('input[name=x]').val()),
				y: parseInt($('input[name=y]').val()),
				mod: parseInt($('input[name=vel]').val())
			};
			//Calculate perpendicular vector
			var vector = calculateVector(obj);
			drawObj(obj, vector);
		}
	});

	function calculateVector(obj){
		//Radius from center to obj
		var OA = {
			y: obj.y,
			mod: sqrt( pow(obj.x, 2) + pow(obj.y, 2) )
		};

		//Radius vector projecting to Y axis
		var OB = {mod: OA.y};

		//Angle between Radius vector projecting to Y and Radius vector
		var degBOA = Math.acos(OB.mod/OA.mod);

		//Get perpendicular vector length from center
		var OC = {
			mod: sqrt( pow(OA.mod, 2) + pow(obj.mod,2) )
		};

		//Angle between Radius from center to obj and perpendicular vector
		var degAOC = Math.asin(obj.mod / OC.mod);

		//Calculate perpendicular vector coordinates
		//Right part of coordinates axis
		OC.x = (obj.x > 0)
			? OC.mod * Math.sin(degAOC + degBOA)
			: OC.x = OC.mod * Math.sin(degAOC - degBOA);
		//Left part of coordinates axis
		OC.y = (obj.x > 0)
			? OC.mod * Math.cos(degAOC + degBOA)
			: OC.y = OC.mod * Math.cos(degAOC - degBOA);

		return OC;
	}

	function drawObj(obj, vector){
		ctxPl[0].clearRect(0,0,1000,1000);
		//Draw center
		ctxPl[0].beginPath();
		ctxPl[0].arc(screen.cX, screen.cY, 10, 0, 2*Math.PI, true);
		ctxPl[0].fillStyle = '#ee0';
		ctxPl[0].fill();
		ctxPl[0].closePath();
		//Draw obj
		ctxPl[0].beginPath();
		ctxPl[0].arc(screen.cX + obj.x, screen.cY - obj.y, 5, 0, 2*Math.PI, true);
		ctxPl[0].fillStyle = '#e00';
		ctxPl[0].fill();
		ctxPl[0].closePath();

		//Draw radius
		ctxPl[0].beginPath();
		ctxPl[0].moveTo(screen.cX, screen.cY);
		ctxPl[0].strokeStyle = '#fff';
		ctxPl[0].lineWidth = '1';
		ctxPl[0].lineTo(screen.cX + obj.x, screen.cY - obj.y);
		ctxPl[0].stroke();
		ctxPl[0].closePath();

		//Draw velocity
		ctxPl[0].beginPath();
		ctxPl[0].moveTo(screen.cX + obj.x, screen.cY - obj.y);
		ctxPl[0].strokeStyle = '#fff';
		ctxPl[0].lineWidth = '1';
		ctxPl[0].lineTo(screen.cX + vector.x, screen.cY - vector.y);
		ctxPl[0].stroke();
		ctxPl[0].closePath();
	};
});