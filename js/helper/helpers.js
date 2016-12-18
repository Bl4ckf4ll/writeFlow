class _ {
    constructor(element) {

    }

    static $(element) {
        if (element.indexOf('.') != -1) {
            return document.querySelectorAll(element);
        } else {
            return document.querySelector(element);
        }
    }

    static hasClass(element, theClass) {
        if (element.className.indexOf(' ' + theClass) === -1) {
            return false;
        } else {
            return true;
        }
    }

    static addClass(element, theClass) {
        if (!_.hasClass(element, theClass)) {
            element.className += ' ' + theClass;
        }
    }

    static removeClass(element, theClass) {
        if (_.hasClass(element, theClass)) {
            element.className = element.className.replace(' ' + theClass, '');
        }
    }

    static toggleClass(element, theClass) {
        if (_.hasClass(element, theClass)) {
            _.addClass(element, theClass);
        } else {
            _.removeClass(element, theClass);
        }
    }

    static click(element, callback) {
        element.addEventListener("click", callback);
    }

    static keydown(element, callback) {
        element.addEventListener("keydown", callback);
    }

    static on(eventName, element, callback) {
        document.addEventListener(eventName, function(e) {

            if (typeof element === 'object') {
                if (e.target.className === element.className) {
                    callback();
                }
            } else {
                let el;

                if (el = document.querySelector(element)) {
                    if (e.target.className === el.className) {
                        callback(e.target);
                    }
                }
            }
        });
    }
}
