var log = console.log.bind(console)

var myconcat = function (...args) {
    var res = new String()
    var i
    for (i in args) {
        var arg = args[i]
        if (typeof arg != "string"){
            arg = arg.toString()
        }
        res = res.concat(arg)
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

var myMatCopy = function (mat) {
    var mat_copy = []

    var r
    for (r in mat) {
        var row = mat[r].concat()
        mat_copy.push(row)
    }

    return mat_copy
}
