class Editor {
    constructor() {
        this.chars =  []
        this.lines = []
        this.max_char_one_line = 32
        this.num_char_current_line = 0
        this.last_char = null
        this.last_char_mat = [
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

        o.last_char = char
        o.last_char_mat = myMatCopy(mats[char])

        var ls = o.lines
        var current_line = ls[ls.length - 1]

        var on = o.num_char_current_line
        if(on === 0 || on === o.max_char_one_line){
            o.num_char_current_line = 0
            current_line = o.createLine()
        }

        // update state
        o.num_char_current_line++
        //
        var charactor = o.createChractor()
        o.chars.push(charactor)
    }

    deleteChar() {
        log("delete")
        var o = this
    }
}
