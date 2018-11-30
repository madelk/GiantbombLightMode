
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
    "#f7f7f8": "#080808",
    "#999": "#666",
    "#191919": "#E6E6E6",
    "#00ffd4": "red",
    "#404040": "#BFBFBF",
    "#262626": "#D9D9D9"
}
function hackit(css) {
    Object.keys(replaceValues).forEach(valueToReplace => {
        var re = new RegExp(valueToReplace,"g");
        css = css.replace(re, replaceValues[valueToReplace]);
    });
    // return css.replace(/#242628/g, "#DBD9D7").replace(/#000/g, "#tempbutts").replace(/#fff/g, "#000").replace(/#tempbutts/g, "#fff");
    return css;
}
doit();