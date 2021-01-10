import { Shape } from "@antv/x6"

//一个基础节点
const rectBase = new Shape.Rect({
    width: 100,
    height: 50,
    zIndex: 2,
    //样式
    attrs: {
        body: {
            fill: 'aqua',
        },
        label: {
            text: 'aqua',
            fill: 'black',
        },
    },
    //数据
    data: {
        msg: 'this is data',
    }
})

const rects = { rectBase }

export default rects

