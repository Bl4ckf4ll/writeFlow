<?php
	include_once 'load.php';
?>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Edit Files</title>
		<link rel="stylesheet" href="css/main.css">
		<script src="js/helper/helpers.js"></script>
		<script src="js/notes.js"></script>
		<script src="js/main.js"></script>
	</head>
	<body>
		<header>
			<div class="header-left">
				<a class="brand">write<span class="big">Flow</span></a>
			</div>
			<div class="header-middle">
				<input type="text" id="searchText" placeholder="Search">
			</div>
		</header>
		<?php include_once 'inc/panel.php' ?>
		<?php include_once 'inc/sidebar.php' ?>
		<?php include_once 'inc/content.php' ?>
	</body>
</html>
