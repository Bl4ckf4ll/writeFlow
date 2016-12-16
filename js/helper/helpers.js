class _ {
    constructor (element) {

    }

    static $ (element) {
        if () {
            return document.querySelectorAll(element);
        }
    }

    static addClass (element, theClass) {
        element.className += ' ' + theClass;
    }

    static removeClass (element, theClass) {
        element.className = element.className.replace(' ' + theClass, '');
    }

    static toggleClass (element, theClass) {
        if (element.className.indexOf(' ' + theClass) === -1) {
            element.className += ' ' + theClass;
        } else {
            element.className = element.className.replace(' ' + theClass, '');
        }
    }

    static click (element, callback) {
        element.addEventListener("click", callback);
    }

    static on (eventName, element, callback) {
        if (element.length > 1) {    
            document.addEventListener("change", function () {
                for (var i = 0; i < element.length; i++ ) {
                    element[i].addEventListener(eventName, callback);
                }
            });
        } else {
            
        }
    }
}