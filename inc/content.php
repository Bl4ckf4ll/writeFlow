<div class="main-content">
	<h1>Create Note</h1>
	<hr>
	<form class="note-editor" id="note-editor" data-id="0">
		<div class="form-group">
			<label for="note-title">Title</label>
			<input type="text" id="note-title" placeholder="Note Title">
		</div>
		<div class="note-content">
			<label for="note-content">Content</label>
			<div class="note-div-editor" id="note-content" contenteditable="true">
			</div>
		</div>
	</form>
	<div class="fixed-buttons-container">
		<input type="submit" class="btn btn-primary" id="save-note-button" value="Save">
		<a href="#" id="create-btn" class="btn entypo-plus"></a>
	</div>
</div>