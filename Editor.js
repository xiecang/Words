class Editor {
    constructor() {
        this.chars = []
        this.max_char_num_line = 32
        this.line_num = 0
        this.char_current_line = 0
        this.current_char = null

        this.current_char_mat = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ]

        this.bindEvents()
    }

    static new() {
        return new this()
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
        // window.addEventListener("mousedown", function(event){
        //     var cs = o.chars
        //     var i
        //     for (i in cs) {
        //         cs[i].toggleSelectedState()
        //     }
        // })
        // window.addEventListener("mouseup", function(event){
        //
        // })
    }


    createLine() {
        var l = Line.new(this.line_num)
        return l
    }

    createChractor() {
        var c = Charactor.new(this.char_current_line, this.line_num + 1, this.current_char_mat)
        return c
    }

    type(char) {
        var o = this

        o.current_char = char
        // this.current_char_mat = mats[char]
        // var current_line = getElemById(myconcat("line_num-", (o.line_num + 1).toString()))
        o.current_char_mat = myMatCopy(mats[char])
        var current_line = getElemById(myconcat("line_num-", (o.line_num+1).toString()))

        if (o.char_current_line === o.max_char_num_line) {
            o.char_current_line = 0
            o.line_num++
            current_line = o.createLine()
        }
        // update state
        o.char_current_line++
        //
        var charactor = o.createChractor()
        o.chars.push(charactor)
    }

    deleteChar() {
        log("delete")
        var o = this
    }
}
