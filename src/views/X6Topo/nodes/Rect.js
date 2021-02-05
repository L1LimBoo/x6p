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
            stroke: 'black'
        },
        label: {
            text: 'aqua',
            fill: 'black',
        },
    },
    //连接桩
    ports: {
        groups: {
            top: {
                position:'top',
                attrs: {
                    circle: {
                        r: 6,
                        magnet: true,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        fill: '#fff',
                    },
                }
            },
            right:{
                position:'right',
                attrs: {
                    circle: {
                        r: 6,
                        magnet: true,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        fill: '#fff',
                    },
                }
            }
        },
        items: [
            {
                id: 'port1',
                group: "top",
            },
            {
                id: 'port2',
                group: "top"
            },
            {
                id: 'port3',
                group: "right"
            },
        ]
    },
    //数据
    data: {
        msg: 'this is data',
    }
})

const rects = { rectBase }

export default rects

