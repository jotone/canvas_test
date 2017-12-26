G = 6.67408 * Math.pow(10, -11);

G2 = 2.429573 * Math.pow(10, -36);
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
		mass:{
			mantis: 1.9885,
			pow: 30
		},
		coords: {
			x: 500,
			y: 500
		},
		radius: 695.51 * Math.pow(10, 6) / c, //Ls
		color: 'yellow',
		gravityDistance: ((3 * 1.9885) / (4 * 25)) * Math.pow(10, 14) /2
	};

	var planets = {
		1: { //Mercury
			mass:{
				mantis: 0.333022,
				pow: 24
			}, //tons
			radius: 2.4397 * Math.pow(10, 6) / c, //Ls
			a: 0.46001009 * Math.pow(10, 11)/ c,
			b: 0.69817445 * Math.pow(10, 11)/ c,
			velocity: 47360 / c, //Orbital speed
			horAngle: toRad(29.124), //pericenter Argument
			vertAngle: 3.38 //incline per Star equator
		},
		2: { //Venus
			mass: {
				mantis:4.8675,
				pow: 24
			}, //tons
			radius: 6.0518 * Math.pow(10, 6) / c, //Ls
			a: 1.07476259 * Math.pow(10, 11)/ c,
			b: 1.08942109 * Math.pow(10, 11)/ c,
			velocity: 35020 / c,
			horAngle: toRad(54.852),
			vertAngle: 3.86
		},
		3: { //Earth
			mass: {
				mantis: 5.9726,
				pow: 24
			}, //tons
			radius: 6.3781 * Math.pow(10, 6) / c, //Ls
			a: 1.47098290 * Math.pow(10, 11)/ c,
			b: 1.52098232 * Math.pow(10, 11)/ c,
			velocity: 29783 / c,
			horAngle: toRad(114.208),
			vertAngle: 7.115
		},
		4: { //Mars
			mass: {
				mantis: 0.64171,
				pow: 24
			}, //tons
			radius: 3.3962 * Math.pow(10, 6) / c, //Ls
			a: 2.06655 * Math.pow(10, 11) / c,
			b: 2.49232 * Math.pow(10, 11) / c,
			velocity: 24130 / c,
			horAngle: toRad(286.462),
			vertAngle: 5.65
		},
		5: { //Upiter
			mass: {
				mantis: 1898.6,
				pow: 24
			},//tons
			radius: 71.492 * Math.pow(10, 6) / c, //Ls
			a: 7.405736 * Math.pow(10, 11) / c,
			b: 8.165208 * Math.pow(10, 11) / c,
			velocity: 13070 / c,
			horAngle: toRad(275.066),
			vertAngle: 6.09
		},
		6: { //Saturn
			mass: {
				mantis: 568.46,
				pow: 24
			}, //tons
			radius: 60.268 * Math.pow(10, 6) / c, //Ls
			a: 13.53572956 * Math.pow(10, 11) / c,
			b: 15.13325783 * Math.pow(10, 11) / c,
			velocity: 9690 / c,
			horAngle: toRad(336.013),
			vertAngle: 5.51
		},
		7: { //Uranus
			mass: {
				mantis: 86.832,
				pow: 24
			}, //tons
			radius: 25.559 * Math.pow(10, 6) / c, //Ls
			a: 27.48938461 * Math.pow(10, 11) / c,
			b: 30.04419704 * Math.pow(10, 11) / c,
			velocity: 6810 / c,
			horAngle: toRad(96.541),
			vertAngle: 6.48
		},
		8: { //Neptune
			mass: {
				mantis: 102.43,
				pow: 24
			}, //tons
			radius: 24.764 * Math.pow(10, 6) / c, //Ls
			a: 44.52940833 * Math.pow(10, 11) / c,
			b: 45.53946490 * Math.pow(10, 11) / c,
			velocity: 5434.9 / c,
			horAngle: toRad(265.647),
			vertAngle: 6.43
		}
	}


//Draw star
	ctxBg.beginPath();
	ctxBg.arc(Sol.coords.x, Sol.coords.y, Sol.radius, 0, 2* Math.PI, true);
	ctxBg.fillStyle = Sol.color;
	ctxBg.fill();
	ctxBg.closePath();
// /Draw star


	var x = planets[1].a * Math.cos(0);
	var y = planets[1].b * Math.sin(0);

	for(var i = 1; i<9; i++){
		var x = planets[i].a * Math.cos(0);
		var y = planets[i].b * Math.sin(0);

		planets[i].coords = {
			x: x*Math.cos(planets[i].horAngle) - y*Math.sin(planets[i].horAngle) + Sol.coords.x,
			y: x*Math.sin(planets[i].horAngle) + y*Math.cos(planets[i].horAngle) + Sol.coords.x
		}
		planets[i].distance = getDistance(Sol, planets[i]);
		planets[i].g = {
			mod: G * (Sol.mass.mantis / planets[i].distance) * Math.pow(10, Sol.mass.pow)
		}

	}
	console.log(planets);

//Draw planet
	for(var i = 1; i< 4; i++){
		ctxPl[0].beginPath();
		ctxPl[0].arc(planets[i].coords.x, planets[i].coords.y, 1, 0, 2* Math.PI, true);
		ctxPl[0].fillStyle = '#ee0000';
		ctxPl[0].fill();
		ctxPl[0].closePath();
	}

// / Draw planet

	/*var R = getDistance(Sol, planets[1]);
	var sinE = (planets[1].coords.x - Sol.coords.x) / R;
	var mod_g = G * (Sol.mass / R);
	var g = {
		x: Sol.coords.x + (planets[1].coords.x - Sol.coords.x)*(0 - sinE),
		y: Sol.coords.y + (planets[1].coords.y - Sol.coords.y)*(0 - sinE),
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
// / Create dA vector*/
});