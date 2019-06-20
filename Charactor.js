class Charactor {
    constructor(char_current_line, lineNumber, content_mat) {
        this.fugure = null
        this.mat = content_mat
        this.DOM_id = null
        this.char_current_line = char_current_line
        this.lineNumber = lineNumber
        //
        this.drawFigure()
    }

    static new(...args){
        return new this(...args)
    }

    drawFigure = function() {
        var o = this

        o.figure = document.createElement("table")
        o.DOM_id = myconcat("charactor-", (o.char_current_line).toString() )
        o.figure.setAttribute('id', o.DOM_id)
        o.figure.setAttribute('cellspacing', '0')

        for(var i=0; i<o.mat.length; i++) {
            var tr = document.createElement("tr")
            tr.setAttribute('id', myconcat("char-row-", (i+1).toString() ))
            o.figure.appendChild(tr)

            for(var j=0; j<o.mat[0].length; j++) {
                var td = document.createElement("td")

                // 拼接每个像素的名字
                var str = myconcat("char-px-", (i+1).toString() )
                str = myconcat(str, "-" )
                str = myconcat(str, (j+1).toString() )

                td.setAttribute('id', str)
                td.setAttribute('height', '1')
                td.setAttribute('width', '1')

                if(o.mat[i][j] == 1) {
                    td.setAttribute('style', "background-color: black;")
                } else if(o.mat[i][j] == 0) {
                    td.setAttribute('style', "background-color: white;")
                }

                tr.appendChild(td)
            }
        }

        var current_line = getElemById( myconcat("line-", o.lineNumber.toString() ) )
        current_line.appendChild(o.figure)
    }

    togglePxState(i, j) {
        var o = this

        var str = myconcat("char-px-", (i+1).toString() )
        str = myconcat(str, "-" )
        str = myconcat(str, (j+1).toString() )

        var px = getElemById(str)

        if(o.mat[i][j] == 0) {
            o.mat[i][j] = 1
            px.setAttribute('style', "background-color: black; border:1px solid #000000;")
        } else if (o.mat[i][j] == 1){
            o.mat[i][j] = 0
            px.setAttribute('style', "background-color: white; border:1px solid #000000;")
        }
    }
}
