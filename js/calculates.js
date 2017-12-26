/**
 * 1 min weight = 1 Ton
 * 1 min length = 1 light second(Ls) = 299792458
 */
c = 299792458;

G = 2.429573 * Math.pow(10, -36); // (Ls^3) / (Ton * second^2)

var Soll = {
	mass: 1.9885 * Math.pow(10, 27), //tons,
	radius: 695.51 * Math.pow(10, 6) / c, //Ls
}

var planets = {
	1: {
		mass: 0.333022 * Math.pow(10, 21), //tons,
		radius: 2.4397 * Math.pow(10, 6) / c, //Ls
	},
	2: {
		mass: 4.8675 * Math.pow(10, 21), //tons,
		radius: 6.0518 * Math.pow(10, 6) / c, //Ls
	},
	3: {
		mass: 5.9726 * Math.pow(10, 21), //tons,
		radius: 6.3781 * Math.pow(10, 6) / c, //Ls
	},
	4: {
		mass: 0.64171 * Math.pow(10, 21), //tons,
		radius: 3.3962 * Math.pow(10, 6) / c, //Ls
	},
	5: {
		mass: 1898.6 * Math.pow(10, 21), //tons,
		radius: 71.492 * Math.pow(10, 6) / c, //Ls
	},
	6: {
		mass: 568.46 * Math.pow(10, 21), //tons,
		radius: 60.268 * Math.pow(10, 6) / c, //Ls
	},
	7: {
		mass: 86.832 * Math.pow(10, 21), //tons,
		radius: 25.559 * Math.pow(10, 6) / c, //Ls
	},
	8: {
		mass: 102.43 * Math.pow(10, 21), //tons,
		radius: 24.764 * Math.pow(10, 6) / c, //Ls
	}
}
