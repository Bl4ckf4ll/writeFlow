<sidebar class="file-tree">
	<h1>Your Notes</h1>
	<hr>
	<nav>
		<ul>
			<?php
			$notes = new writeFlow\Notes();

			foreach ($notes->read('all') as $note) {
				echo "<li data-id='{$note['id']}' class='note'>{$note['title']}</li>";
			}

			?>
		</ul>
	</nav>
</sidebar>