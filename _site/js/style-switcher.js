function setActiveStyleSheet(title) {
    var i, a, main;
    var dropDown = document.getElementById('switcher');
    for (i = 0; (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel")
            .indexOf("style") != -1 && a.getAttribute("title")) {
            a.disabled = true;
            if (a.getAttribute("title") == title) {
                a.disabled = false;
                setDropDownList(dropDown, title);
                createCookie("style", title, 365);
            }
        }
    }
}

function getActiveStyleSheet() {
    var i, a;
    for (i = 0;
    (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel")
            .indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
    }
    return null;
}

function getPreferredStyleSheet() {
    var i, a;
    for (i = 0;
    (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel")
            .indexOf("style") != -1 && a.getAttribute("rel")
            .indexOf("alt") == -1 && a.getAttribute("title")) return a.getAttribute("title");
    }
    return null;
}


function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function setDropDownList(dropDown, value) {
    var isFound = false;
    for (var i = 0; i < dropDown.options.length; i++) {
        if (dropDown.options[i].value == value) {
            dropDown.options[i].selected = true;
            isFound = true;
        }
    }

    if (isFound == false) dropDown.options[0].selected = true;
}
