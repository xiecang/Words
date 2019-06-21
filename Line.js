class Line {
    constructor(serial_line) {
        this.serial_line = serial_line
        this.chars = []
        this.max_char_one_line = 32
        this.num_char_current_line = 0
        this.last_char = null
        this.last_char_mat = null

        this.drawLine()
    }

    static new(...args) {
        return new this(...args)
    }

    drawLine() {
        var l = document.createElement("div")
        l.setAttribute('id', myconcat("line-", (this.serial_line).toString()));
        l.setAttribute('style', "display: flex;");
        var screen = getElemById("screen")
        screen.appendChild(l)
    }

    deleteChar() {
        log("delete")
    }

    addChar(char) {
        var o = this
        o.last_char = char
        o.last_char_mat = myMatCopy(mats[char])

        // update state
        o.num_char_current_line++
        //
        var c = Charactor.new(o.num_char_current_line, o.serial_line, o.last_char_mat)
        o.chars.push(c)
    }
}
