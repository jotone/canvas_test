G = 2.429573 * Math.pow(10, -36);
c = 299792458;
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

	var Sol = {
		mass: 1.9885 * Math.pow(10, 7),
		coords: {
			x: 500,
			y: 500
		},
		radius: 25,
		color: 'yellow'
	};

	var planets = {
		1: {
			mass: 3.33022,
			coords: {
				x: Sol.coords.x - 100,
				y: Sol.coords.y - 200
			},
			radius: 3,
			color: 'orange',
			moveAngle: toRad(250),
			velocity: 140// Ls/sec
		}
	}


//Draw star
	ctxBg.beginPath();
	ctxBg.arc(Sol.coords.x, Sol.coords.y, Sol.radius, 0, 2* Math.PI, true);
	ctxBg.fillStyle = Sol.color;
	ctxBg.fill();
	ctxBg.closePath();
// /Draw star

//Draw planet
	ctxPl[0].beginPath();
	ctxPl[0].arc(planets[1].coords.x, planets[1].coords.y, planets[1].radius, 0, 2* Math.PI, true);
	ctxPl[0].fillStyle = planets[1].color;
	ctxPl[0].fill();
	ctxPl[0].closePath();
// / Draw planet

	var R = getDistance(Sol, planets[1]);
	var sinE = (planets[1].coords.x - Sol.coords.x) / R;
	var g = {
		x: Sol.coords.x + (planets[1].coords.x - Sol.coords.x)*(0 - sinE),
		y: Sol.coords.y + (planets[1].coords.y - Sol.coords.y)*(0 - sinE),
		mod: G * (Sol.mass / R)
	};

	var a = {
		x: planets[1].coords.x + Math.sin(planets[1].moveAngle) * planets[1].velocity,
		y: planets[1].coords.y + - Math.cos(planets[1].moveAngle) * planets[1].velocity
	};

	var dA = {
		x: Sol.coords.x - g.x + a.x,
		y: Sol.coords.y - g.y + a.y
	}
	console.log(a);

//Create g vector
	ctxPl[0].beginPath();
	ctxPl[0].strokeStyle = '#666';
	ctxPl[0].lineWidth = '1';
	ctxPl[0].moveTo(planets[1].coords.x, planets[1].coords.y);
	ctxPl[0].lineTo(g.x, g.y);
	ctxPl[0].stroke();
	ctxPl[0].closePath();
// /Create g vector

//Create a vector
	ctxPl[0].beginPath();
	ctxPl[0].strokeStyle = '#666';
	ctxPl[0].lineWidth = '1';
	ctxPl[0].moveTo(planets[1].coords.x, planets[1].coords.y);
	ctxPl[0].lineTo(a.x, a.y);
	ctxPl[0].stroke();
	ctxPl[0].closePath();
// / Create a vector

//Create dA vector
	ctxPl[0].beginPath();
	ctxPl[0].strokeStyle = '#ffffff';
	ctxPl[0].lineWidth = '1';
	ctxPl[0].moveTo(planets[1].coords.x, planets[1].coords.y);
	ctxPl[0].lineTo(dA.x, dA.y);
	ctxPl[0].stroke();
	ctxPl[0].closePath();
// / Create dA vector
});