class Line {
    constructor(serial_line) {
        this.serial_line = serial_line
        this.chars = []
        this.max_char_one_line = 32
        this.num_char_current_line = 0
        this.last_char = null
        this.last_char_mat = null
        this.DOM_id = myconcat("line-", (this.serial_line).toString())

        this.init()
    }

    static new(...args) {
        return new this(...args)
    }

    init() {
        this.drawLine()
    }

    drawLine() {
        var l = document.createElement("div")
        l.setAttribute('id', this.DOM_id);
        l.setAttribute('style', "display: flex;");
        var screen = getElemById("screen")
        screen.appendChild(l)
    }

    deleteChar() {
        var t = this
        t.num_char_current_line--
        var tcs = t.chars
        var c = tcs.pop()
        getElemById(t.DOM_id).removeChild(getElemById(c.DOM_id))
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
