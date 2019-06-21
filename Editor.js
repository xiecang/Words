class Editor {
    constructor() {
        this.lines = []
        this.DOM_id = "screen"
        this.init()
    }

    static new(...args) {
        return new this(...args)
    }

    init() {
        this.bindEvents()
        this.drawScreen()
    }

    drawScreen() {
        var screen = document.createElement("div")
        screen.setAttribute('id', this.DOM_id);
        screen.setAttribute('style', "border: solid;");
        document.body.appendChild(screen);
    }

    bindEvents() {
        var o = this
        window.addEventListener("keydown", function (event) {
            var k = event.key
            if (k in mats) {
                o.type(k)
            } else if (k === 'Backspace') {
                o.delete()
            } else {
                log("key not supported previously.")
            }
        })
        window.addEventListener("mousedown", function (event) {
            var os = o.lines
            var i
            for (i in os) {
                var osc = os[i].chars
                var k
                for (k in osc)
                    osc[k].toggleSelectedState()
            }
        })
        // window.addEventListener("mouseup", function(event){
        //
        // })
    }


    createLine() {
        var o = this
        var l = Line.new(o.lines.length + 1)
        o.lines.push(l)
        return l
    }

    createChractor() {
        var c = Charactor.new(this.num_char_current_line, this.lines.length, this.last_char_mat)
        return c
    }

    type(char) {
        var o = this

        var ls = o.lines
        var current_line = ls[ls.length - 1]
        var cl = current_line

        if (ls.length === 0 || cl.num_char_current_line === cl.max_char_one_line) {
            cl = o.createLine()
        }

        cl.addChar(char)
    }

    delete() {
        var o = this

        var ls = o.lines
        var current_line = ls[ls.length - 1]
        var cl = current_line

        if (ls.length === 0) {
            log("全空, 无法再删除")
        } else if (ls.length !== 0) {
            o.deleteCharDirectly(cl, ls)
        }
    }

    deleteCharDirectly(current_line, lines) {
        var o = this
        var cl = current_line
        var ls = lines
        cl.deleteChar()
        var cln = cl.num_char_current_line

        if (cln === 0) {
            log("行空")
            ls.pop()
            o.removeLine(cl)

            if (ls.length !== 0) {
                cl = ls[ls.length - 1]
                cl.num_char_current_line = 32
            } else if (ls.length === 0) {
                log("全空")
            }
        } else if (cln !== 0) {
            log("行未空")
        }
    }

    removeLine(cl) {
        var cl_DOM = getElemById(cl.DOM_id)
        getElemById(this.DOM_id).removeChild(cl_DOM)
    }
}
