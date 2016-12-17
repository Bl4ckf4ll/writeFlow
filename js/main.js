window.onload = () => {
    const notes = new Notes();
    const createButton = _.$("#create-btn");
    const saveButton = _.$("#save-note-button");

    notes.getNotes();

    _.click(saveButton, function () {
        let notes = new Notes();
        notes.updateNote();
        setTimeout( () => notes.getNotes(), 200);
    });

    _.click(createButton, function () {
        _.toggleClass(this, 'expanded');
    });

    _.on("click", ".note-preview", function (e) {
        let note = Notes.getNote(e.getAttribute("data-id"));
    });
}