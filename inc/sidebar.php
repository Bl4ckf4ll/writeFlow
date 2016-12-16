<sidebar class="file-tree">
	<h1>Your Notes</h1>
	<hr>
	<nav>
		<ul id="notes-list">
			<?php
			$notes = new writeFlow\Notes();

			foreach ($notes->read('all') as $note) { ?>
				<li data-id='<?= $note['id'] ?>' class='note'>
					<div class="note-preview">
						<div class="note-title"><?= $note['title'] ?></div>
						<div class="note-content"><?= $note['content'] ?></div>
					</div>
				</li>
			<?php } ?>
		</ul>
	</nav>
</sidebar>