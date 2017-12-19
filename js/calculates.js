var G = Math.pow(10, -11) * 6.67408;


function getForce(m1, m2, r){
	/*r = Math.pow(10, 9) * r;
	m1 = Math.pow(10, 23) * m1;
	m2 = Math.pow(10, 23) * m2;*/
	var GM = m1*m2*G;
	var R = Math.pow(r, 2);
	var F = GM/R;
	return F;//* Math.pow(10, 28);
}

var m1 = 1.9885// * Math.pow(10, 7);
console.log(getForce(m1, 48.675, 109) * Math.pow(10, 35));

//F = G * ((m1 * m2)/(r^2))
//G = 6.67408* 10^-11
//Mass
/*
mass = mass^23
a,b: a,b ^= 9
Soll = {
	mass: 1.9885 * 10^7
}
Mercu = {
	mass: 3.33022
	a: 46
	b: 69.8
	angle: 29.12
	Fa: 20.8869 * 10^21
	Fb: 9.0715 * 10^21
}
Venus = {
	mass: 48.675,
	a: 107.5,
	b: 109,
	angle: 54.85
	Fa: 55.8992 * 10^21
	Fb: 54.3713 * 10^21
}
Earth = {
	mass: 59.726,
	a: 147,
	b: 152,
	angle: 114.2
	Fa:
	Fb:
}
Mars  = {
	mass: 6.4171,
	a: 206.5,
	b: 249,
	angle: 286.5
	Fa:
	Fb:
}
Jupit = {
	mass: 18986,
	a: 740.5,
	b: 816.5,
	angle: 275
	Fa:
	Fb:
}
Saturn= {
	mass: 5684.6,
	a: 1354,
	b: 1513,
	angle: 336
	Fa:
	Fb:
}
Uran  = {
	mass: 868.32,
	a: 2749,
	b: 3004,
	angle: 96.5
	Fa:
	Fb:
}
Neptun= {
	mass: 1024.3,
	a: 4453,
	b: 4554,
	angle: 265.6
	Fa:
	Fb:
}
*/