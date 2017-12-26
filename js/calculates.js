/**
 * 1 min weight = 1 Ton
 * 1 min length = 1 light second(Ls) = 299792458
 */
c = 299792458;

G = 2.429573 * Math.pow(10, -36); // (Ls^3) / (Ton * second^2)

var Soll = {
	mass: {
		mantis: 1.9885,
		pow: 27
	}, //tons,
	radius: 695.51 * Math.pow(10, 6) / c, //Ls
}

var planets = {
	1: { //Mercury
		mass:{
			mantis: 0.333022,
			pow: 21
		}, //tons
		radius: 2.4397 * Math.pow(10, 6) / c, //Ls
		a: 0.46001009 * Math.pow(10, 11)/ c,
		b: 0.69817445 * Math.pow(10, 11)/ c,
		velocity: 47360 / c, //Orbital speed
		horAngle: 29.124, //pericenter Argument
		vertAngle: 3.38 //incline per Star equator
	},
	2: { //Venus
		mass: {
			mantis:4.8675,
			pow: 21
		}, //tons
		radius: 6.0518 * Math.pow(10, 6) / c, //Ls
		a: 1.07476259 * Math.pow(10, 11)/ c,
		b: 1.08942109 * Math.pow(10, 11)/ c,
		velocity: 35020 / c,
		horAngle: 54.852,
		vertAngle: 3.86
	},
	3: { //Earth
		mass: {
			mantis: 5.9726,
			pow: 21
		}, //tons
		radius: 6.3781 * Math.pow(10, 6) / c, //Ls
		a: 1.47098290 * Math.pow(10, 11)/ c,
		b: 1.52098232 * Math.pow(10, 11)/ c,
		velocity: 29783 / c,
		horAngle: 114.208,
		vertAngle: 7.115
	},
	4: { //Mars
		mass: {
			mantis: 0.64171,
			pow: 21
		}, //tons
		radius: 3.3962 * Math.pow(10, 6) / c, //Ls
		a: 2.06655 * Math.pow(10, 11) / c,
		b: 2.49232 * Math.pow(10, 11) / c,
		velocity: 24130 / c,
		horAngle: 286.462,
		vertAngle: 5.65
	},
	5: { //Upiter
		mass: {
			mantis: 1898.6,
			pow: 21
		},//tons
		radius: 71.492 * Math.pow(10, 6) / c, //Ls
		a: 7.405736 * Math.pow(10, 11) / c,
		b: 8.165208 * Math.pow(10, 11) / c,
		velocity: 13070 / c,
		horAngle: 275.066,
		vertAngle: 6.09
	},
	6: { //Saturn
		mass: {
			mantis: 568.46,
			pow: 21
		}, //tons
		radius: 60.268 * Math.pow(10, 6) / c, //Ls
		a: 13.53572956 * Math.pow(10, 11) / c,
		b: 15.13325783 * Math.pow(10, 11) / c,
		velocity: 9690 / c,
		horAngle: 336.013,
		vertAngle: 5.51
	},
	7: { //Uranus
		mass: {
			mantis: 86.832,
			pow: 21
		}, //tons
		radius: 25.559 * Math.pow(10, 6) / c, //Ls
		a: 27.48938461 * Math.pow(10, 11) / c,
		b: 30.04419704 * Math.pow(10, 11) / c,
		velocity: 6810 / c,
		horAngle: 96.541,
		vertAngle: 6.48
	},
	8: { //Neptune
		mass: {
			mantis: 102.43,
			pow: 21
		}, //tons
		radius: 24.764 * Math.pow(10, 6) / c, //Ls
		a: 44.52940833 * Math.pow(10, 11) / c,
		b: 45.53946490 * Math.pow(10, 11) / c,
		velocity: 5434.9 / c,
		horAngle: 265.647,
		vertAngle: 6.43
	}
}
