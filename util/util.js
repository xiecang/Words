var log = console.log.bind(console)

var myconcat = function(str1, str2) {
    var str = new String(str1)
    str = str.concat(str2)

    return str
}

var getElemById = function(o) {
    return document.getElementById(o)
}
