class Charactor {
    constructor(char_current_line, line_serial, content_mat, create_mode = false) {
        this.fugure = null
        this.mat = content_mat
        this.char_id = null
        this.char_current_line = char_current_line
        this.line_serial = line_serial
        this.style_black = "background-color: black;"
        this.style_white = "background-color: white;"
        this.style_selected = "background-color: blue;"
        this.px_h = 1
        this.px_w = 1
        this.selected = false
        this.create_mode = create_mode
        //
        this.init()
    }

    static new(...args) {
        return new this(...args)
    }

    init() {
        this.setBoxStyle(this.create_mode)
        this.drawFigure()
    }

    setBoxStyle(create_mode) {
        var o = this
        if (create_mode === true) {
            o.style_black += "border:1px solid #000000;"
            o.style_white += "border:1px solid #000000;"
            o.px_h = 30
            o.px_w = 30
        } else if (create_mode === false) {
        }
    }

    drawFigure() {
        var o = this

        o.figure = document.createElement("table")
        o.char_id = myconcat((o.line_serial).toString(), "-", "charactor-", (o.char_current_line).toString())
        o.figure.setAttribute('id', o.char_id)
        o.figure.setAttribute('cellspacing', '0')

        for (var i = 0; i < o.mat.length; i++) {
            var tr = document.createElement("tr")
            var row_id = myconcat((o.line_serial).toString(), "-", (o.char_current_line).toString(), "-row-", (i + 1).toString())
            tr.setAttribute('id', row_id)
            o.figure.appendChild(tr)

            for (var j = 0; j < o.mat[0].length; j++) {
                var td = document.createElement("td")

                // 拼接每个像素的名字
                var px_id = myconcat((o.line_serial).toString(), "-", (o.char_current_line).toString(), "-px-", (i + 1).toString(), "-", (j + 1).toString())
                td.setAttribute('id', px_id)
                td.setAttribute('height', o.px_h)
                td.setAttribute('width', o.px_w)
                if (o.mat[i][j] === 1) {
                    td.setAttribute('style', o.style_black)
                } else if (o.mat[i][j] === 0) {
                    td.setAttribute('style', o.style_white)
                }
                tr.appendChild(td)
            }
        }

        var line_id = myconcat("line-", (o.line_serial).toString())
        log(line_id)
        var current_line = getElemById(line_id)
        current_line.appendChild(o.figure)
    }

    togglePxState(i, j) {
        var o = this

        var px_id = myconcat((o.line_serial).toString(), "-", (o.char_current_line).toString(), "-px-", (i + 1).toString(), "-", (j + 1).toString())
        var px = getElemById(px_id)

        var blank = 0
        var filled = 1
        if (o.mat[i][j] === blank) {
            o.mat[i][j] = filled
            px.setAttribute('style', o.style_black)
        } else if (o.mat[i][j] === filled) {
            o.mat[i][j] = blank
            px.setAttribute('style', o.style_white)
        }
    }

    getSelected() {
        var o = this
        o.selected = true
        for (var i = 0; i < o.mat.length; i++) {
            for (var j = 0; j < o.mat[0].length; j++) {

                var blank = 0
                var selected = 2
                var px_id = myconcat((o.line_serial).toString(), "-", (o.char_current_line).toString(), "-px-", (i + 1).toString(), "-", (j + 1).toString())
                var px = getElemById(px_id)

                if (o.mat[i][j] === blank) {
                    o.mat[i][j] = selected
                    px.setAttribute('style', o.style_selected)
                }
            }
        }
    }

    undoSelected() {
        var o = this
        o.selected = false
        for (var i = 0; i < o.mat.length; i++) {
            for (var j = 0; j < o.mat[0].length; j++) {

                var blank = 0
                var selected = 2
                var px_id = myconcat((o.line_serial).toString(), "-", (o.char_current_line).toString(), "-px-", (i + 1).toString(), "-", (j + 1).toString())
                var px = getElemById(px_id)

                if (o.mat[i][j] === selected) {
                    o.mat[i][j] = blank
                    px.setAttribute('style', o.style_white)
                }
            }
        }
    }
}
