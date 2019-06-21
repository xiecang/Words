class Line {
    constructor(serial_line) {
        this.serial_line = serial_line
        this.chars = []
        this.max_char_one_line = 32
        this.num_char_current_line = 0

        var l = document.createElement("div")
        l.setAttribute('id', myconcat("line-", (serial_line).toString()));
        l.setAttribute('style', "display: flex;");
        var screen = getElemById("screen")
        screen.appendChild(l)
    }

    static new(...args) {
        return new this(...args)
    }

    createChractor() {
        var c = Charactor.new(this.num_char_current_line, this.lines.length, this.last_char_mat)
        return c
    }

    deleteChar() {
        log("delete")
    }
}
