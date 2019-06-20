class Line {
    constructor(lineNumber) {
        var l = document.createElement("div")
        l.setAttribute('id', myconcat("line-", (lineNumber+1).toString() ));
        l.setAttribute('style', "display: flex;");
        var screen = getElemById("screen")
        screen.appendChild(l)
    }

    static new(...args) {
        return new this(...args)
    }
}
