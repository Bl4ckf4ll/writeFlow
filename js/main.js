window.onload = () => {
    var notes = document.getElementsByClassName("note");
    var noteEditForm = document.getElementById("note-editor");

    for (var i = 0; i < notes.length; i++ ) {
        notes[i].addEventListener("click", function () {
            let note = new Notes();
            note.getNote(this.getAttribute("data-id"));
        });
    }

    noteEditForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let note = new Notes();
        note.saveNote();
    });
}