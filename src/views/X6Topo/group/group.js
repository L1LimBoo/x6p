//group的总体配置

//限制子节点位置
export function setGroupTranslating() {
    return {
        restrict(view) {
            const cell = view.cell;
            if (cell.isNode()) {
                const parent = cell.getParent();
                if (parent) {
                    return parent.getBBox();
                }
            }
        },
    }
}

export function groupTest(graph){
    const child = graph.addNode({
        x: 120,
        y: 80,
        width: 120,
        height: 60,
        zIndex: 10,
        label: "child",
        attrs: {
            body: {
                fill: "green",
            },
            label: {
                fill: "#fff",
            },
        },
    });

    const parent = graph.addNode({
        x: 80,
        y: 40,
        width: 320,
        height: 240,
        zIndex: 1,
        label: "Parent",
        ports: {
            groups: {
                group1: {
                    attrs: {
                        circle: {
                            r: 16,
                            magnet: true,
                            stroke: "#31d0c6",
                            strokeWidth: 2,
                            fill: "#fff",
                        },
                    },
                },
            },
            items: [
                {
                    id: "port1",
                    group: "group1", // 指定分组名称
                },
                {
                    id: "port2",
                    group: "group1", // 指定分组名称
                },
                {
                    id: "port3",
                    group: "group1", // 指定分组名称
                },
            ],
        },
    });

    parent.addChild(child);
}