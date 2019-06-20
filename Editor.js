class Editor {
    constructor() {
        this.chars =  []
        this.max_char_line = 32
        this.char = null
        this.lineNumber = 0
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
    }

    static new() {
        return new this()
    }

    createLine() {
        var l = Line.new(this.lineNumber)
        return l
    }

    createChractor() {
        var c = Charactor.new(this.char_current_line, this.lineNumber+1, this.current_char_mat)
        return c
    }

    type(char) {
        var o = this

        o.current_char = char

        if(char == 'J') {
            this.current_char_mat = printable_mats["J"]
        }

        var current_line = getElemById( myconcat("lineNumber-", (o.lineNumber+1).toString() ) )

        if(o.char_current_line == o.max_char_line){
            o.char_current_line = 0
            o.lineNumber++

            current_line = o.createLine()
        }
        // update state
        o.char++
        o.char_current_line++

        var charactor = o.createChractor()
        o.chars.push(charactor)
    }

    deleteChar() {
        log("delete")
    }
}
