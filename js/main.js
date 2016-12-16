window.onload = () => {
    const saveButton = _.$("#save-note-button");
    const notes = new Notes();
    const createButton = _.$("#create-btn");
    let note = _.$(".note");

    notes.getNotes();

    _.click(saveButton, () => {
        let note = new Notes();
        note.updateNote();
        setTimeout( () => notes.getNotes(), 200);
    });

    _.click(createButton, function () {
        _.toggleClass(this, 'expanded');
    });

    _.on("click", note, function () {
        let note = new Notes();
        console.log(this);
        
    });
}