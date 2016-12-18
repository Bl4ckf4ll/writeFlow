class _ {
    constructor (element) {

    }

    static $ (element) {
        if (element.indexOf('.') != -1) {
            return document.querySelectorAll(element);
        } else {
            return document.querySelector(element);
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

    static keydown (element, callback) {
        element.addEventListener("keydown", callback);
    }

    static on (eventName, element, callback) {
        document.addEventListener(eventName, function (e) {

            if (typeof element === 'object') {
                if (e.target.className === element.className) {
                    callback();
                }
            } else {
                const el = document.querySelector(element);
                
                if (e.target.className === el.className) {
                    callback(e.target);
                }
            }
        });
    }
}