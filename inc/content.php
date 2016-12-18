<div class="main-content">
	<h1>Create Note</h1>
	<hr>
	<form class="note-editor" id="note-editor" data-id="0">
		<div class="form-group">
			<label for="note-title">Title</label>
			<div id="note-title" class="note-div-editor" contenteditable="true">
			</div>
		</div>
		<div class="note-content">
			<label for="note-content">Content</label>
			<div class="note-div-editor" id="note-content" contenteditable="true">
			</div>
		</div>
	</form>
	<div class="fixed-buttons-container">
		<button id="save-note-button" class="btn btn-primary"> Save </button>
		<button id="create-btn" class="btn btn-info entypo-plus"> Create Note </button>
		<button id="delete-btn" class="btn btn-danger hide">Delete Note</button>
	</div>
</div>