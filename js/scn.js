var shft = 400;

$(document).ready(function(){
	for(var i = 50; i<800; i=i+50){
		$('body').append('<span class="coord-x" style="left: '+i+'px">'+(i-shft)+'</span>');
	}
	for(var i = 50; i<800; i=i+50){
		$('body').append('<span class="coord-y" style="top: '+(i-14)+'px">'+(i-shft)+'</span>');
	}
});


var canvas = document.getElementById('image');
var ctx = canvas.getContext('2d');

for (var x = 0; x <= 800; x = x + 50) {
	ctx.beginPath();
	ctx.strokeStyle = '#000000';
	ctx.lineWidth = '1';
	ctx.moveTo(x, 0);
	ctx.lineTo(x, 800);
	ctx.stroke();
	ctx.beginPath();
	ctx.strokeStyle = '#000000';
	ctx.lineWidth = '1';
	ctx.moveTo(0, x);
	ctx.lineTo(800, x);
	ctx.stroke();
	ctx.closePath()
}

ctx.beginPath();
ctx.strokeStyle = '#ee0000';
ctx.moveTo(shft, shft);
ctx.quadraticCurveTo(shft+100, shft-300, shft+200, shft);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = '#ee0000';
ctx.moveTo(shft, shft);
ctx.quadraticCurveTo(shft+100, shft+300, shft+200, shft);
ctx.stroke();
ctx.closePath();
/*;

	*/

/*ctx.beginPath();
ctx.moveTo(50, 50);
ctx.quadraticCurveTo(200, 200, 150, 50);
ctx.stroke();
ctx.closePath();*/

/*var x =0;
var timer;
function drawSinus(){
	var y = Math.sin(x);
	if(x >= 400){
		x = 0;
	}else{
		x += 0.3;
	}

	ctx.fillRect(5*x, 100+20*y, 2, 2);
	timer = setTimeout(drawSinus, 10);
}
drawSinus();*/

/*var stepCount = 0;
var direction;
var coord = {
	x: 400,
	y: 200
}

var eventCoords = {
	x: 0,
	y: 0
}
var timer;
function drawDot(){
	ctx.clearRect(0, 0, 1200, 900);
	if(stepCount == 0){
		stepCount = Math.floor(15 * Math.random());
		direction = Math.floor(8*Math.random());
	}else{
		stepCount--;
	}
	switch(direction){
		case 0: coord.y--; break;
		case 1: coord.x++; break;
		case 2: coord.y++; break;
		case 3: coord.x--; break;
		case 4:
			coord.y--;
			coord.x++;
		break;
		case 5:
			coord.y++;
			coord.x++;
		break;
		case 6:
			coord.y++;
			coord.x--;
		break;
		case 7:
			coord.y--;
			coord.x--;
		break;
	}
	if((coord.x < 0) || (coord.x > 1200) || (coord.y < 0) || (coord.y > 900)){
		stepCount = 0;
	}

	ctx.fillRect(coord.x-3, coord.y-3, 6, 6);

	ctx.beginPath();//New op
	ctx.moveTo(coord.x, coord.y);//New op
	ctx.lineTo(eventCoords.x, eventCoords.y);//New op
	ctx.stroke();//New op
	timer = setTimeout(drawDot, 100);
}

canvas.onmousemove = function(event){
	eventCoords = {
		x: event.offsetX,
		y: event.offsetY
	}
}
drawDot();*/
/*
//My obj
function createObj(ctx){
	var shift = 2;
	ctx.beginPath();
	ctx.moveTo(shift+80, shift+80);
	ctx.strokeStyle = '#000000';
	ctx.lineWidth = '2';
	ctx.lineTo(shift+90, shift+60);
	ctx.lineTo(shift+100, shift+80);
	ctx.lineTo(shift+90, shift+75)
	ctx.fillStyle = 'yellow';
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	return ctx;
}
ctx = createObj(ctx);*/

/* CIRCLES
ctx.beginPath();//!!!!!!
ctx.arc(shift+300, shift+300, 100, 0, 2*pi, true);
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
ctx.fill();
ctx.closePath();//!!!!!!
ctx.beginPath();
ctx.arc(shift+350, shift+400, 100, 0, 2*pi, true);
ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(shift+400, shift+300, 100, 0, 2*pi, true);
ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
ctx.fill();
ctx.closePath();*/


//Rectangles
/*
ctx.fillStyle = 'red';
ctx.fillRect(100, 50, 150, 75);

ctx.strokeStyle = 'green';
ctx.lineWidth = '10';
ctx.rect(150, 150, 75, 25);
ctx.stroke();
ctx.fillStyle = '#a7f442';
ctx.fill();

//Lines
/*ctx.beginPath();
ctx.strokeStyle = '#ee0000';
ctx.lineWidth = '5';
ctx.lineCap = 'round';//square; (default)butt;
ctx.moveTo(100, 50);
ctx.lineTo(150, 150);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = '#aa00ff';
ctx.lineWidth = '2';
ctx.moveTo(150, 150);
ctx.lineTo(300, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(150, 50);
ctx.lineTo(250, 150);
//ctx.lineTo(50, 150);
ctx.lineWidth = '4';
ctx.lineCap = 'butt';
ctx.fillStyle = 'yellow';
ctx.closePath();
ctx.stroke();
ctx.fill();
*/
/*PAINT
canvas.onmousedown = function(e){
	canvas.onmousemove = function(e){
		var color = $('input[name=color]').val();
		var x = e.offsetX;
		var y = e.offsetY;
		ctx.fillRect(x-5, y-5, 10, 10);
		ctx.fillStyle = color;
		ctx.fill();
	}
	canvas.onmouseup = function(e){
		canvas.onmousemove = null;
	}
};*/