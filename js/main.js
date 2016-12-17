window.onload = () => {
    const createButton = _.$("#create-btn");
    const saveButton = _.$("#save-note-button");
    const titleContainer = _.$("#note-title");
    const contentContainer = _.$("#note-content");
    const noteEditor = _.$("#note-editor");
    const notesList = _.$("#notes-list");


    Notes.getNotes(poblateTree);

    _.click(saveButton, function () {
        Notes.updateNote(noteEditor.getAttribute("data-id"), titleContainer.value, contentContainer.innerHTML, data => {
            Notes.getNotes(poblateTree);
        });
    });

    _.click(createButton, function () {
        _.toggleClass(this, 'expanded');
    });

    _.on("click", ".note-preview", function (e) {
        Notes.getNote(e.getAttribute("data-id"), note => {
            noteEditor.setAttribute("data-id", note.id);
            titleContainer.value = note.title;
            contentContainer.innerHTML = note.content;
        });
    });

    function poblateTree (notes) {
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