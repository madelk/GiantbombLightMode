
function doit() {
    var cssUrl = document.getElementById('skin-color').href;
    document.getElementById('skin-color').href = '';
    var request = new XMLHttpRequest();
    request.open('GET', cssUrl)
    request.onload = function () {
        console.log('got old css')
        var oldCss = request.response;
        var newCss = hackit(oldCss);
        document.querySelector('head').innerHTML += "<style>" + newCss + "</style>";
        document.getElementsByTagName('html')[0].style.display = "block";
    };
    console.log('getting old css')
    request.send();
}
var replaceValues = {
    "#242628": "#DBD9D7",
    "#000": "#ffe",
    "#fff": "#001",
    "#f7f7f8": "#080809",
    "#999": "#666667",
    "#191919": "#E6E6E7",
    "#00ffd4": "red",
    "#404040": "#BFBFC1",
    "#262626": "#D9D9E0",
    "#BFBFBF" : "404041",
    "#f2f2f2": "#0D0D0E",
    "255,255,255,0.25": "0,0,0,1.25"
}
function hackit(css) {
    // This kind of sucks. It'd be neat if it found all the places to change and then did them all at once rather than editing the same string over and over
    Object.keys(replaceValues).forEach(valueToReplace => {
        var re = new RegExp(valueToReplace,"gi");
        css = css.replace(re, replaceValues[valueToReplace]);
    });
    return css;
}
doit();