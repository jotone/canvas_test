function toRad(angle){
	return angle * Math.PI / 180;
}
function toDeg(angle){
	return angle * (180 / Math.PI);
}

//Function build object
function viewObj(ctx, myObj){
	ctx.beginPath();
	ctx.strokeStyle = '#ffffff';
	ctx.fillStyle = 'red';
	ctx.lineWidth = '2';
	if(myObj.type == 'lineTo'){
		for(var i in myObj.formula){
			var shift = myObj.formula[i];
			ctx.lineTo(shift[0], shift[1]);
		}
	}
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
}

//Function views object with it angle
function drawObj(ctx, obj, screen){
	ctx.save();
	ctx.clearRect(0, 0, 1000, 1000);
	ctx.translate(obj.x+screen.clickX, obj.y+screen.clickY);
	ctx.rotate(toRad(obj.angle));
	viewObj(ctx, obj);
	ctx.restore();
}

function move(stepsCount, startCoords, finalCoords, ctxObj, myObj){
	switch(true){
		case ((startCoords.dX >= 0) && (startCoords.dY >= 0)):
			var condition = (startCoords.clickX < finalCoords.x) && (startCoords.clickY < finalCoords.y);
		break;

		case ((startCoords.dX < 0) && (startCoords.dY >= 0)):
			var condition = (startCoords.clickX > finalCoords.x) && (startCoords.clickY < finalCoords.y);
		break;

		case ((startCoords.dX >= 0) && (startCoords.dY < 0)):
			var condition = (startCoords.clickX < finalCoords.x) && (startCoords.clickY > finalCoords.y);
		break;

		case ((startCoords.dX < 0) && (startCoords.dY < 0)):
			var condition = (startCoords.clickX > finalCoords.x) && (startCoords.clickY > finalCoords.y);
		break;
	}

	if(condition){
		drawObj(ctxObj, myObj, startCoords);
		startCoords.clickX += startCoords.dX / stepsCount;
		startCoords.clickY += startCoords.dY / stepsCount;

		setTimeout(function(){
			move(stepsCount, startCoords, finalCoords, ctxObj, myObj);
		}, 10);
	}else{
		screen.preventRotate = false;
		screen.preventClick = false;
	}
}

screen = {
	x: 1000,
	y: 1000,
	cX: 500,
	cY: 500,
	zoom: 1,
	clickX: 0,
	clickY: 0,
	preventRotate: false,
	preventClick: false
};

$(document).ready(function() {
//Settings
	var canvasBg = document.getElementById('background-layer');
	var ctxBg = canvasBg.getContext('2d');

	var canvasObj = document.getElementById('moving_obj');
	var ctxObj = canvasObj.getContext('2d');

	var timer;
// / Settings

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


//my Obj
	var myObj = {
		x: 25,
		y: 25,
		type: 'lineTo',
		formula: [
			[-10, 10],
			[0,-20],
			[10, 10],
			[0, 5]
		],
		angle: 45
	};
	drawObj(ctxObj, myObj, screen)
// / my Obj


//Rotation event
	//WORKS
	$('.main').on('mousemove',function(e){
		if(!screen.preventRotate){
			var modified = {
				x: e.originalEvent.pageX-myObj.x-screen.clickX,
				y: e.originalEvent.pageY-myObj.y-screen.clickY,
				hypot: Math.hypot(e.originalEvent.pageX-myObj.x-screen.clickX, e.originalEvent.pageY-myObj.y-screen.clickY)
			};
			myObj.angle = toDeg(Math.asin(modified.y / modified.hypot)) + 90;
			if(modified.x < 0){
				myObj.angle *= -1;
			}
			drawObj(ctxObj, myObj, screen);
		}
	});
// / Rotation event

//Move event
	canvasObj.addEventListener('click', moveObj, false);
	function moveObj(e){
		if(!screen.preventClick){
			screen.preventRotate = true;
			screen.preventClick = true;

			var step = 5;

			var finalCoords = {
				x: e.clientX - myObj.x,
				y: e.clientY - myObj.y
			};

			var startCoords = {
				clickX: screen.clickX,
				clickY: screen.clickY,
				dX: e.clientX - screen.clickX - myObj.x,
				dY: e.clientY - screen.clickY - myObj.y
			};

			var stepsCount = (Math.hypot(startCoords.dX, startCoords.dY) / step).toFixed(0);

			setTimeout(function(){
				move(stepsCount, startCoords, finalCoords, ctxObj, myObj, timer);
			}, 10);

			screen.clickX = finalCoords.x;
			screen.clickY = finalCoords.y;
		}
	}
// / Move event
});