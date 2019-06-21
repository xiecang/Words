class Editor {
    constructor() {
        this.lines = []
        this.init()
    }

    static new(...args) {
        return new this(...args)
    }

    init() {
        this.bindEvents()
    }

    bindEvents() {
        var o = this
        window.addEventListener("keydown", function (event) {
            for (var key in mats) {
                if (event.key === key) {
                    o.type(key)
                } else if (event.key === 'Backspace') {
                    o.deleteChar()
                }
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

    deleteChar() {
        log("delete")
        var o = this
    }
}
