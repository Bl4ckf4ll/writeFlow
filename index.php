<html>
	<head>
		<meta charset="UTF-8">
		<title>Edit Files</title>
		<script src="js/main.js"></script>
		<link rel="stylesheet" href="css/main.css">
	</head>
	<body>
		<header>
			<a class="brand">Edit<span class="big">Note</span></a>
		</header>
		<sidebar class="file-tree">
			<h1>Your Files</h1>
			<hr>
			<nav>
				<ul>
					<?php
					include_once 'Controllers/Files.php';

					$files = scandir('files');

					echo '<li><a href="http://localhost/exercises"> Create New </a></li>';
					while (list($key, $file) = each($files)) {
						$filename = basename('files/'.$file, '.txt');

						if ($file != "." && $file != "..") {
							echo "<li><a href='?file=$filename'>" . $file . "</a></li>";
						}
					}
					?>
				</ul>
			</nav>
		</sidebar>
		<div class="main-content">
			<h1>Create/Edit File</h1>
			<hr>
			<?php
				if ( isset($_POST['filename']) ) {
					extract($_POST, EXTR_PREFIX_ALL, 'post');
					$file = new Files($post_filename);
					$file->create($post_filecontents);

					if ( $file->create($post_filecontents) ) {
						echo "File created";	
					} else {
						echo "Error Ocurred";
					}
				}
			?>
			<form method="post">
				<?php 
					if ( isset($_GET['file']) ) { 
						extract($_GET, EXTR_PREFIX_ALL, 'get');
						$file = new Files($get_file);
						$contents = extract($file->read());
						echo '<h3>Editing file at: <code>' . $filepath . '</code></h3>'
				?>
					<div class="form-group">
						<label>Filename:</label>
						<input type="text" name="filename" placeholder="filename" value="<?= $filename ?>">
					</div>
					<div class="form-group">
						<label for="filecontents">Content:</label>
						<textarea name="filecontents" id="filecontents" cols="30" rows="10" placeholder="filecontents"><?= $filecontent ?></textarea>
					</div>
					<div class="form-group">
						<input type="submit" class="btn btn-primary" value="Save">
					</div>
				<?php } else { ?>
					<div class="form-group">
						<label>Filename:</label>
						<input type="text" name="filename" placeholder="filename">
					</div>
					<div class="form-group">
						<label for="filecontents">Content:</label>
						<textarea name="filecontents" id="filecontents" cols="30" rows="10" placeholder="filecontents"></textarea>
					</div>
					<div class="form-group">
						<input type="submit" class="btn btn-primary" value="Create">
					</div>
				<?php  } ?>
			</form>
		</div>
	</body>
</html>
