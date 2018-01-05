c = 299792458 //m/sec
G =6.67408 * pow(10, -11) // (m^3)/(kg * sec^2)

var Sol = {
	radius: { //m
		m: 695.51,
		p: Math.pow(10, 6)
	},
	mass: { //kg
		m: 1.9885,
		p: Math.pow(10, 30)
	},
	incline: 67.23 //per galaxy
}

var planets = {
	1: {//Mercury
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
		selfIncline: 2.11, //self axis incline per orbit
		incline: 3.38, // incline per Sol equator,
		vertAngle: 29.124279, //vertical angle per Sol axis (Аргумент перицентра)
		velocity: 47360 // m/sec
	},
	2: {//Venus
		mass: {
			m: 48.675,
			p: 23
		},
		radius: {
			m: 6.0518,
			p: 6
		},
		ph: { //Perihelion
			m: 107.476259,
			p: 9
		},
		ah: { //Aphelion
			m: 108.942109,
			p: 9
		},
		selfIncline: 177.36, //self axis incline per orbit
		incline: 3.86, // incline per Sol equator,
		vertAngle: 54.85229, //vertical angle per Sol axis (Аргумент перицентра)
		velocity: 35020
	},
	3: {//Earth
		mass: {
			m: 59.726,
			p: 23
		},
		radius: {
			m: 6.3781,
			p: 6
		},
		ph: { //Perihelion
			m: 147.098290,
			p: 9
		},
		ah: { //Aphelion
			m: 152.098232,
			p: 9
		},
		selfIncline: 23.26, //self axis incline per orbit
		incline: 7.155, // incline per Sol equator,
		vertAngle: 114.20783, //vertical angle per Sol axis (Аргумент перицентра)
		velocity: 29783
	},
	4: {//Mars
		mass: {
			m: 6.4171,
			p: 23
		},
		radius: {
			m: 3.3962,
			p: 6
		},
		ph: { //Perihelion
			m: 206.655,
			p: 9
		},
		ah: { //Aphelion
			m: 249.232,
			p: 9
		},
		selfIncline: 25.1919, //self axis incline per orbit
		incline: 5.65, // incline per Sol equator,
		vertAngle: 286.46230, //vertical angle per Sol axis (Аргумент перицентра)
		velocity: 24130
	},
	5: {//Jupiter
		mass: {
			m: 18986,
			p: 23
		},
		radius: {
			m: 71.492,
			p: 6
		},
		ph: { //Perihelion
			m: 740.5736,
			p: 9
		},
		ah: { //Aphelion
			m: 816.5208,
			p: 9
		},
		selfIncline: 3.13, //self axis incline per orbit
		incline: 6.09, // incline per Sol equator,
		vertAngle: 275.066, //vertical angle per Sol axis (Аргумент перицентра)
		velocity: 13070
	},
	6: {//Saturn
		mass: {
			m: 5684.6,
			p: 23
		},
		radius: {
			m: 58.232,
			p: 6
		},
		ph: { //Perihelion
			m: 1353.572956,
			p: 9
		},
		ah: { //Aphelion
			m: 1513.325783,
			p: 9
		},
		selfIncline: 26.73, //self axis incline per orbit
		incline: 5.51, // incline per Sol equator,
		vertAngle: 336.014, //vertical angle per Sol axis (Аргумент перицентра)
		velocity: 9690
	},
	7: {//Uranus
		mass: {
			m: 868.32,
			p: 23
		},
		radius: {
			m: 25.362,
			p: 6
		},
		ph: { //Perihelion
			m: 2748.938461,
			p: 9
		},
		ah: { //Aphelion
			m: 3004.419704,
			p: 9
		},
		selfIncline: 97.77, //self axis incline per orbit
		incline: 6.48, // incline per Sol equator,
		vertAngle: 96.541318, //vertical angle per Sol axis (Аргумент перицентра)
		velocity: 6810
	},
	8: {//Neptune
		mass: {
			m: 1024.3,
			p: 23
		},
		radius: {
			m: 24.622,
			p: 6
		},
		ph: { //Perihelion
			m: 4452.940833,
			p: 9
		},
		ah: { //Aphelion
			m: 4553.946490,
			p: 9
		},
		selfIncline: 28.32, //self axis incline per orbit
		incline: 6.43, // incline per Sol equator,
		vertAngle: 265.646853, //vertical angle per Sol axis (Аргумент перицентра)
		velocity: 5435
	}
};