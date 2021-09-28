
/**
 * 画布配置
 */
const graphConfig = {
    width: 800,
    height: 800,
    background: {
        color: "#fffbe6", //背景色
    },
    grid: {
        size: 20, //网格大小
        visible: true, //显示网格
    },
    //小地图配置:scroller.enabled为true才能开启小地图
    scroller: {
        enabled: false,
    },
    minimap: {
        enabled: false,
        container: this.$refs.minimap,
    },
    //限制子节点移动
    translating: this.translating,
    //调整节点大小
    resizing: true,
    //缩放
    mousewheel: {
        enabled: true,
    },
    //画布平移
    panning: {
        enabled: true,
    },
}


/**
 * 画布初始化
 * @returns 
 */
export function initGraph(container) {
    return new Promise((resolve, reject) => {
        try {
            const graph = new Graph({
                container: this.$refs.flow,
                width: 800,
                height: 800,
                background: {
                    color: "#fffbe6", //背景色
                },
                grid: {
                    size: 20, //网格大小
                    visible: true, //显示网格
                },
                //小地图配置:scroller.enabled为true才能开启小地图
                scroller: {
                    enabled: false,
                },
                minimap: {
                    enabled: false,
                    container: this.$refs.minimap,
                },
                //限制子节点移动
                translating: this.translating,
                //调整节点大小
                resizing: true,
                //缩放
                mousewheel: {
                    enabled: true,
                },
                //画布平移
                panning: {
                    enabled: true,
                },
            });
            resolve(graph);
        } catch (error) {
            reject(error);
        }
    });
}