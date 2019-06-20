var __main = function () {
    // __improveCharFigure()
    __startTyping()
}

var __improveCharFigure = function () {
    var fontMaker = FontMaker.new()
}

var __startTyping = function () {
    var editor = Editor.new()
    window.addEventListener("keydown", function (event) {
        for (var key in printable_mats) {
            if (event.key == key) {
                log(key)
                editor.type(key)
            }
        }

        if (event.key == 'Backspace') {
            editor.deleteChar()
        }
    })
}

__main()
