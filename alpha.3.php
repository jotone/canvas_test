<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Canvas</title>

	<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/alpha.3.css">
</head>
<body>

<div class="main">
	<canvas id="background-layer" width="1000" height="1000"></canvas>

	<canvas id="planet1" width="1000" height="1000"></canvas>
</div>

<div class="data-wrap">
	<input name="x" type="number" value="0"><br><br>
	<input name="y" type="number" value="0"><br><br>
	<button name="accept" type="button">Proceed</button>
</div>

<script type="text/javascript" src="js/jquery.3.2.1.min.js"></script>
<script type="text/javascript" src="js/alpha.3.js" defer></script>
</body>
</html>