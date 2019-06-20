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
        this.panel = Charactor.new(1, 1, this.init_mat)
        this.bindClickEventToEachPx()
    }

    static new() {
        return new this()
    }

    // 显示表格边框, 放大表格
    bindClickEventToEachPx() {
        var o = this

        for (var i = 0; i < o.langthX; i++) {
            for (var j = 0; j < o.langthY; j++) {
                // 拼接每个像素的名字
                var px_id = myconcat("1-1-px-", (i + 1).toString(), "-", (j + 1).toString())

                getElemById(px_id).addEventListener("mousedown", function(event) {                    // 切换像素状态
                    // 遍历所有像素, 找到这个事件触发像素
                    for (var i = 0; i < o.langthX; i++) {
                        for (var j = 0; j < o.langthY; j++) {
                            var px_id = myconcat("1-1-px-", (i+1).toString(), "-", (j+1).toString() )

                            if(event.target.id === px_id) {
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

        log(o.panel.mat)
    }

    togglePxState(i, j) {
        this.panel.togglePxState(i, j)
    }
}
