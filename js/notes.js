class Notes {
    constructor () {
    }

    static getNotes (callback) {
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "handlers/notes/show.php");
        xhttp.onreadystatechange = function () {
            if (this.status === 200 && this.readyState === 4) {
                 callback( JSON.parse(this.responseText) );
            }
        }

        xhttp.send();
    }

    static getNote (noteId, callback) {
        const id = noteId;
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "handlers/notes/show.php");
        
        xhttp.onreadystatechange = function () {
            if (this.status === 200 && this.readyState === 4 ) {
                callback( JSON.parse(this.responseText) );
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
    
    static updateNote (id, title, content, callback) {
        const xhttp = new XMLHttpRequest();

        xhttp.open("POST", "handlers/notes/update.php");
        xhttp.onreadystatechange = function () {
            if (this.status === 200 && this.readyState === 4) {
                let message = "Note Updated!";

                callback(message);
            }
        }

        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send( "id=" + id + "&title=" + title + "&content=" + content);
    }
}