function degree(angle){
	return (angle*Math.PI/180);
}

function drawOrb(ctx, coords, screen){
	for(var alpha = 0; alpha<=(2* Math.PI); alpha += 0.01){
		var x = coords.a * Math.cos(alpha);
		var y = coords.b * Math.sin(alpha);

		var x_sh = x*Math.cos(coords.angle) - y*Math.sin(coords.angle) + screen.cX ;
		var y_sh = x*Math.sin(coords.angle) + y*Math.cos(coords.angle) + screen.cY;
		ctx.beginPath();
		ctx.fillStyle = '#00ee00';
		ctx.fillRect(x_sh, y_sh, 1, 1);
		ctx.fill();
		ctx.closePath();
	}
}
$(document).ready(function() {
//Settings
	var screen = {
		x: 1200,
		y: 1200,
		cX: 600,
		cY: 600,
		zoom: 1
	};
	var canvasBg = document.getElementById('background-layer');
	var ctxBg = canvasBg.getContext('2d');
	var canvasStar = document.getElementById('star-layer');
	var ctxStar = canvasStar.getContext('2d');

	var canvasPlanet1 = document.getElementById('planet1-layer');
	var canvasPlanet2 = document.getElementById('planet2-layer');
	var canvasPlanet3 = document.getElementById('planet3-layer');
	var canvasPlanet4 = document.getElementById('planet4-layer');
	var canvasPlanet5 = document.getElementById('planet5-layer');
	var canvasPlanet6 = document.getElementById('planet6-layer');
	var canvasPlanet7 = document.getElementById('planet7-layer');
	var canvasPlanet8 = document.getElementById('planet8-layer');

	var ctxPl= [
		canvasPlanet1.getContext('2d'),
		canvasPlanet2.getContext('2d'),
		canvasPlanet3.getContext('2d'),
		canvasPlanet4.getContext('2d'),
		canvasPlanet5.getContext('2d'),
		canvasPlanet6.getContext('2d'),
		canvasPlanet7.getContext('2d'),
		canvasPlanet8.getContext('2d')
	];
// /Settings


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
// /background layer

//Draw star
	ctxStar.beginPath();
	ctxStar.arc(screen.cX, screen.cY, 2, 0, 2* Math.PI, true);
	ctxStar.fillStyle = 'rgba(255, 255, 0, 0.8)';
	ctxStar.fill();
	ctxStar.closePath();
// /Draw star

// Draw orbit

	var planets = [
		{					//Mercury
			a: 4.6,
			b: 6.98,
			angle: degree(29.12),
			time: 8.7//87.969
		},{					//Venus
			a: 10.75,
			b: 10.9,
			angle: degree(54.85),
			time: 22.4//224.698
		},{					//Earth
			a: 14.7,
			b: 15.2,
			angle: degree(114.2),
			time: 36.5//365.256
		},{					//Mars
			a: 20.65,
			b: 24.9,
			angle: 286.5,
			time: 78//779.94
		},{					//Jupiter
			a: 74.05,
			b: 81.65,
			angle: 275,
			time: 433.2//4332.589
		},{					//Saturn
			a: 135.4,
			b: 151.3,
			angle: 336,
			time: 1075.9//10759.22
		},{					//Uranus
			a: 274.9,
			b: 300.4,
			angle: 96.5,
			time: 3068.5//30685.4
		},{					//Neptun
			a: 445.3,
			b: 455.4,
			angle: 265.6,
			time: 6019//60190.03
		}
	]
	for(var i in planets){
		drawOrb(ctxStar, planets[i], screen)
	}

// /Draw orbit
	var timer;

	function drawPlanet(ctx, planet, alpha){
		ctx.clearRect(0,0, screen.x, screen.y);
		var x = planet.a * Math.cos(alpha);
		var y = planet.b * Math.sin(alpha);
		var x_sh = x*Math.cos(planet.angle) - y*Math.sin(planet.angle) + screen.cX ;
		var y_sh = x*Math.sin(planet.angle) + y*Math.cos(planet.angle) + screen.cY;

		ctx.beginPath();
		ctx.fillStyle = '#ee0000';
		ctx.arc(x_sh, y_sh, 2, 0, 2*Math.PI, true);
		ctx.fill();
		ctx.closePath();
		alpha += (1 / planet.time);
		if(alpha > (2 * Math.PI)){
			alpha = 0;
		}
		timer = setTimeout(function(){
			drawPlanet(ctx, planet, alpha)
		}, 100);
	}
	for(var i in planets){
		drawPlanet(ctxPl[i], planets[i], 0);
	}
});