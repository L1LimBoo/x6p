<template>
    <main>
        <!-- 顶部第一行 -->
        <a-row style="height: 50px; border: 2px solid black">
            <!-- 工具栏 -->
            工具栏
        </a-row>
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
        this.initGraph();
        this.groupTest();
        this.switchTest(this.graph);
    },
    methods: {
        initGraph() {
            this.graph = new Graph({
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
                    enabled: true,
                },
                minimap: {
                    enabled: true,
                    container: this.$refs.minimap,
                },
                //限制子节点移动
                translating: this.translating,
            });
            this.graph.fromJSON(this.testData);

            this.graphFinish = true;
        },
        //测试group
        groupTest() {
            const child = this.graph.addNode({
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

            const parent = this.graph.addNode({
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
        },
        //测试switch
        switchTest(graph) {
            const switchCenter = {
                x: 35,
                y: -2,
            };
            const switchOpen = `rotate(-30 ${switchCenter.x} ${switchCenter.y})`;
            const switchClose = `rotate(-12 ${switchCenter.x} ${switchCenter.y})`;
            graph.on("node:click", ({ node }) => {
                if (node.attrs.switch) {
                    const attrPath = "attrs/switch/transform";
                    const current = node.prop(attrPath);
                    const target =
                        current === switchOpen ? switchClose : switchOpen;
                    node.transition(attrPath, target, {
                        interp: (a, b) => {
                            const reg = /-?\d+/g;
                            const start = parseInt(a.match(reg)[0], 10);
                            const end = parseInt(b.match(reg)[0], 10);
                            const d = end - start;
                            return (t) => {
                                return `rotate(${start + d * t} ${
                                    switchCenter.x
                                } ${switchCenter.y})`;
                            };
                        },
                    });
                }
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
</style>