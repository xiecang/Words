var log = console.log.bind(console)

var myconcat = function (...args) {
    var res = new String()
    var i = 0
    for (i in args) {
        res = res.concat(args[i])
    }
    return res
}

var getElemById = function (o) {
    return document.getElementById(o)
}

var enableDrawMatMode = function (a) {
    if (a === true) {
        var fontMaker = FontMaker.new()
    } else {
        var editor = Editor.new()
    }
}
