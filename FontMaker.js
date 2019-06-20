class FontMaker {
    constructor() {
        this.init_mat = [
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
        this.panel = null
        this.langthX = 0
        this.langthY = 0

        //
        this.langthX = this.init_mat.length
        this.langthY = this.init_mat[0].length
        this.panel = Charactor(1, 1, this.init_mat)
        this.bindClickEventToEachPx()
    }

    static new() {
        return new this()
    }

    bindClickEventToEachPx() {
        var o = this

        for (var i = 0; i < o.langthX; i++) {
            for (var j = 0; j < o.langthY; j++) {
                // 拼接每个像素的名字
                var str = myconcat("char-px-", (i + 1).toString())
                str = myconcat(str, "-")
                str = myconcat(str, (j + 1).toString())

                getElemById(str).addEventListener("mousedown", function (event) {
                    // 切换像素状态
                    // 遍历所有像素, 找到这个事件触发像素
                    for (var i = 0; i < o.langthX; i++) {
                        for (var j = 0; j < o.langthY; j++) {
                            var str = myconcat("char-px-", (i + 1).toString())
                            str = myconcat(str, "-")
                            str = myconcat(str, (j + 1).toString())

                            if (event.target.id === str) {
                                o.togglePxState(i, j)
                            }
                        }
                    }

                    o.outputMat()

                })
            }
        }
    }

    outputMat = function () {
        var o = this

        for (var i = 0; i < o.langthX; i++) {
            log(o.panel.mat[i][0] + "," + o.panel.mat[i][1] + "," + o.panel.mat[i][2] + "," + o.panel.mat[i][3] + "," + o.panel.mat[i][4] + "," + o.panel.mat[i][5] + "," + o.panel.mat[i][6] + "," + o.panel.mat[i][7])
        }
    }

    togglePxState(i, j) {
        this.panel.togglePxState(i, j)
    }
}
