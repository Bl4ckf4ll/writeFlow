class Notes {
    constructor () {
        this.titleContainer =  document.getElementById("note-title");
        this.contentContainer = document.getElementById("note-content");
        this.noteFormEditor = document.getElementById("note-editor");
    }

    getNote (noteId) {
        const id = noteId;
        const xhttp = new XMLHttpRequest();
        const titleContainer = this.titleContainer;
        const contentContainer = this.contentContainer;
        const noteEditor = this.noteFormEditor;

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
    
    updateNote () {
        const id = this.noteFormEditor.getAttribute("data-id");
        const title = this.titleContainer.value;
        const content = this.contentContainer.innerHTML;
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "handlers/notes/update.php");
        xhttp.onreadystatechange = function () {
            if (this.status === 200 && this.readyState === 4) {
                console.log(this.responseText);
            }
        }

        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send( "id=" + id + "&title=" + title + "&content=" + content);
    }
}