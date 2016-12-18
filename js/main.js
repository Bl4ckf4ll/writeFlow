window.onload = () => {
    const createButton = _.$("#create-btn");
    const saveButton = _.$("#save-note-button");
    const titleContainer = _.$("#note-title");
    const contentContainer = _.$("#note-content");
    const noteEditor = _.$("#note-editor");
    const notesList = _.$("#notes-list");
    const searchText = _.$("#searchText");

    Notes.getNotes(populateTree);

    _.click(saveButton, function () {
        Notes.saveNote(noteEditor.getAttribute("data-id"), titleContainer.innerHTML, contentContainer.innerHTML, note => {
            noteEditor.setAttribute("data-id", note.id);
            Notes.getNotes(populateTree);
        });
    });

    _.click(createButton, function () {
        noteEditor.setAttribute("data-id", 0);
        titleContainer.innerHTML = "";
        contentContainer.innerHTML = "";
    });

    _.on("click", ".note-preview", function (e) {
        Notes.getNote(e.getAttribute("data-id"), note => {
            noteEditor.setAttribute("data-id", note.id);
            titleContainer.innerHTML = note.title;
            contentContainer.innerHTML = note.content;
        });
    });

    _.keydown( searchText, function () {
        Notes.getNotes( populateTree, this.value);
    });

    function populateTree (notes) {
        notesList.innerHTML = ''; //clean note-tree

        notes.forEach( note => {
            let html = '';

            html += "<li class='note'>";
            html += "<div data-id='"+ note.id +"' class='note-preview'>";
            html += "<div class='note-title'>";
            html += note.title;
            html += "</div>"; // Close note-title
            html += "<div class='note-content'>";
            html += note.content;
            html += "</div>"; // Close note-content
            html += "</div>" // Close note-preview
            html += "</li>";

            notesList.innerHTML += html;
        });
    }
}