class Notes {
    constructor () {
        this.titleContainer =  document.getElementById("note-title");
        this.contentContainer = document.getElementById("note-content");
        this.noteFormEditor = document.getElementById("note-editor");
        this.notesList = document.getElementById("notes-list");
    }

    getNotes () {
        const xhttp = new XMLHttpRequest();
        const notesList = this.notesList;

        xhttp.open("POST", "handlers/notes/show.php");
        xhttp.onreadystatechange = function () {
            if (this.status === 200 && this.readyState === 4) {
                let notes = JSON.parse(this.responseText);
                
                notesList.innerHTML = ''; //clean note-tree

                notes.forEach(function(note) {
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
                }, this);
            }
        }

        xhttp.send();
    }

    static getNote (noteId) {
        const id = noteId;
        const xhttp = new XMLHttpRequest();
        const titleContainer = _.$("#note-title");
        const contentContainer = _.$("#note-content");
        const noteEditor = _.$("#note-editor");

        noteEditor.setAttribute('data-id', id);

        xhttp.open("POST", "handlers/notes/show.php");
        xhttp.onreadystatechange = function () {
            if (this.status === 200 && this.readyState === 4 ) {
                const note = JSON.parse(this.responseText);

                titleContainer.value = note.title;
                contentContainer.innerHTML = note.content;
            }
        }

        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send( "id=" + id );
    }

    create () {
        const id = this.noteFormEditor.getAttribute("data-id");
        const title = this.titleContainer.value;
        const content = this.contentContainer.innerHTML;
        const xhttp = new XMLHttpRequest();
    }
    
    updateNote () {
        const id = this.noteFormEditor.getAttribute("data-id");
        const title = this.titleContainer.value;
        const content = this.contentContainer.innerHTML;
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "handlers/notes/update.php");
        xhttp.onreadystatechange = function () {
            if (this.status === 200 && this.readyState === 4) {
                let message = "Note Updated!";

                return message;
            }
        }

        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send( "id=" + id + "&title=" + title + "&content=" + content);
    }
}