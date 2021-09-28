<template>
    <main>
        <a-layout>
            <a-layout-header
                ><!-- 顶部第一行 -->
                <a-row style="height: 50px; border: 2px solid black">
                    <!-- 工具栏 -->
                    工具栏
                </a-row></a-layout-header
            >
            <a-layout-content>
                <!-- 中间主体 -->
                <a-row>
                    <!-- 元素栏 -->
                    <a-col :span="6">
                        <Stencli v-if="graphFinish" :graph="graph" />
                    </a-col>
                    <!-- 画布 -->
                    <a-col :span="12">
                        <div id="flow" ref="flow"></div>
                    </a-col>
                    <!-- 详情和小地图 -->
                    <a-col :span="6">
                        <!-- 详情 -->
                        <Detail v-if="graphFinish" :graph="graph" />
                        <!-- 小地图 -->
                        <div ref="minimap"></div>
                    </a-col>
                </a-row>
            </a-layout-content>
            <a-layout-footer>FOOTER</a-layout-footer>
        </a-layout>
    </main>
</template>

<script>
import Stencli from "./module/Stencli/Stencli";
import Minimap from "./module/Minimap/Minimap";
import Detail from "./module/Detail/Detail";

import { Graph, Addon, Shape } from "@antv/x6";
import { setGroupTranslating } from "./group/group.js";

export default {
    data() {
        return {
            graph: null,
            testData: {
                // 节点
                nodes: [],
                // 边
                edges: [],
            },
            graphFinish: false,
            //画布配置，限制子节点位置
            translating: {
                restrict(view) {
                    const cell = view.cell;
                    if (cell.isNode()) {
                        const parent = cell.getParent();
                        if (parent) {
                            return parent.getBBox();
                        }
                    }
                },
            },
            embedding: {
                enabled: true,
                findParent({ node }) {
                    const bbox = node.getBBox();
                    return this.getNodes().filter((node) => {
                        // 只有 data.parent 为 true 的节点才是父节点
                        const data = node.getData();
                        if (data && data.parent) {
                            const targetBBox = node.getBBox();
                            return bbox.isIntersectWithRect(targetBBox);
                        }
                        return false;
                    });
                },
            },
        };
    },
    components: {
        Stencli,
        Minimap,
        Detail,
    },
    mounted() {
        this.initGraph().then((graph) => {
            this.graph = graph;
            this.edgeTest(graph);
            graph.centerContent();
        });
    },
    methods: {
        initGraph() {
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
        },
        //测试线
        edgeTest(graph) {
            graph.addEdge({
                source: { x: 200, y: 200 },
                traget: { x: 400, y: 400 },
                attrs: {
                    line: {
                        sourceMarker: "classic",
                        targetMarker: "circle",
                    },
                },
            });
        },
    },
    watch: {
        graph: {
            handler(val) {
                console.log(val);
            },
        },
    },
};
</script>

<style lang='less' scoped>
main {
    height: 100%;

    .ant-layout {
        height: 100%;
    }
}
</style>