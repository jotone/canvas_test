screen = {
	x: 1000,
	y: 1000,
	cX: 500,
	cY: 500
};

function toRad(angle){
	return angle * (Math.PI / 180);
}
function toDeg(angle){
	return angle * (180 / Math.PI);
}

$(document).ready(function() {
//Settings
	var canvasBg = document.getElementById('background-layer');
	var ctxBg = canvasBg.getContext('2d');

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

	//Draw center
	ctxBg.beginPath();
	ctxBg.arc(screen.cX, screen.cY, 10, 0, 2*Math.PI, true);
	ctxBg.fillStyle = '#ee0';
	ctxBg.fill();
	ctxBg.closePath();

// /background layer

	var canvasPlanet1 = document.getElementById('planet1');

	var ctxPl= [
		canvasPlanet1.getContext('2d')
	];

	var planets = [
		{//Mercury
			mass: {
				m: 3.33022,
				p: 23
			},
			radius: {
				m: 2.4397,
				p: 6
			},
			ph: { //Perihelion
				m: 46.001009,
				p: 9
			},
			ah: { //Aphelion
				m: 69.817445,
				p: 9
			},
			selfIncline: toRad(2.11), //self axis incline per orbit
			incline: toRad(3.38), // incline per Sol equator,
			vertAngle: toRad(29.124279), //vertical angle per Sol axis (Аргумент перицентра)
			velocity: 47360
		}
	];

	var timer;

	function drawOrb(ctx, coords, screen){
		for(var alpha = 0; alpha<=(2* Math.PI); alpha += 0.01){
			var x = coords.ph.m * Math.cos(alpha);
			var y = coords.ah.m * Math.sin(alpha);

			var x_sh = x*Math.cos(coords.vertAngle) - y*Math.sin(coords.vertAngle) + screen.cX;
			var y_sh = x*Math.sin(coords.vertAngle) + y*Math.cos(coords.vertAngle) + screen.cY;
			ctx.beginPath();
			ctx.fillStyle = '#00ee00';
			ctx.fillRect(x_sh, y_sh, 1, 1);
			ctx.fill();
			ctx.closePath();
		}
	}

	for(var i in planets){
		drawOrb(ctxBg, planets[i], screen)
	}

	function drawPlanet(ctx, planet, alpha){
		ctx.clearRect(0,0, screen.x, screen.y);
		var x = planet.ph.m * Math.cos(alpha);
		var y = planet.ah.m * Math.sin(alpha);
		var x_sh = x*Math.cos(planet.vertAngle) - y*Math.sin(planet.vertAngle) + screen.cX;
		var y_sh = x*Math.sin(planet.vertAngle) + y*Math.cos(planet.vertAngle) + screen.cY;

		ctx.beginPath();
		ctx.fillStyle = '#ee0000';
		ctx.arc(x_sh+1, y_sh, 2, 0, 2*Math.PI, true);
		ctx.fill();
		ctx.closePath();
		alpha += (1000 / planet.velocity);
		if(alpha > (2 * Math.PI)){
			alpha = 0;
		}

		//Find Radius

		//Find Velocity vector

		timer = setTimeout(function(){
			drawPlanet(ctx, planet, alpha)
		}, 100);
	}

	for(var i in planets){
		drawPlanet(ctxPl[i], planets[i], 0);
	}
});