import { Shape } from "@antv/x6"


const switchCenter = {
    x: 35,
    y: -2,
}
const switchOpen = `rotate(-30 ${switchCenter.x} ${switchCenter.y})`
const switchClose = `rotate(-12 ${switchCenter.x} ${switchCenter.y})`

//开关节点
const switchNode = new Shape.Rect({
    width: 100,
    height: 50,
    zIndex: 2,
    //markup
    markup: [
        {
            tagName: 'g',
            selector: 'left-group',
            children: [
                {
                    tagName: 'rect',
                    selector: 'left',
                    groupSelector: 'line',
                    attrs: {
                        x: 0,
                        y: 0,
                    },
                },
                {
                    tagName: 'circle',
                    selector: 'lco',
                    groupSelector: 'co',
                    attrs: {
                        cx: 30,
                    },
                },
                {
                    tagName: 'circle',
                    selector: 'lci',
                    groupSelector: 'ci',
                    attrs: {
                        cx: 30,
                    },
                },
            ],
        },
        {
            tagName: 'rect',
            selector: 'switch',
            groupSelector: 'line',
        },
        {
            tagName: 'g',
            selector: 'right-group',
            children: [
                {
                    tagName: 'rect',
                    selector: 'right',
                    groupSelector: 'line',
                    attrs: {
                        x: 70,
                        y: 0,
                    },
                },
                {
                    tagName: 'circle',
                    selector: 'rco',
                    groupSelector: 'co',
                    attrs: {
                        cx: 70,
                    },
                },
                {
                    tagName: 'circle',
                    selector: 'rci',
                    groupSelector: 'ci',
                    attrs: {
                        cx: 70,
                    },
                },
            ],
        },
    ],
    //样式
    attrs: {
        line: {
            width: 30,
            height: 2,
            fill: '#000',
            stroke: '#000',
        },
        co: {
            r: 8,
            fill: '#000',
        },
        ci: {
            r: 4,
            fill: '#fff',
        },
        label: {
            text: '',
        },
        switch: {
            ...switchCenter,
            width: 35,
            transform: switchOpen,
        },
    },
    //数据
    data: {
        msg: 'this is switch',
    }
})


const switchNodes = { switchNode }

export default switchNodes