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
                <!-- <div v-if="graphFinish" id="stencli" ref="stencli"></div> -->
            </a-col>
            <!-- 画布 -->
            <a-col :span="12">
                <div id="flow" ref="flow"></div>
            </a-col>
            <!-- 详情和缩略图 -->
            <a-col :span="6">
                <!-- 详情 -->
                <!-- 缩略图 -->
            </a-col>
        </a-row>
    </main>
</template>

<script>
import Stencli from "./module/Stencli/Stencli";
import { Graph, Addon, Shape } from "@antv/x6";

//侧边栏 sten_
const stencliConfig = {
    data() {
        return {
            sten_stencli: null,
            //分组信息
            sten_grupps: [
                {
                    name: "group1",
                    title: "文字节点",
                    collapsable: true,
                    collapsed: false,
                    graphWidth: 200,
                    graphHeight: 400,
                    graphPadding: 10,
                },
                {
                    name: "group2",
                    title: "图片节点",
                    collapsable: true,
                    collapsed: false,
                    graphWidth: 200,
                    graphHeight: 400,
                    graphPadding: 10,
                },
            ],
        };
    },
    mounted() {
        // //节点
        // const r1 = this.graph.createNode({
        //     width: 100,
        //     height: 100,
        //     attrs: {
        //         label: {
        //             text: "Rect",
        //             fill: "#6a6c8a",
        //         },
        //         body: {
        //             stroke: "#31d0c6",
        //             strokeWidth: 5,
        //         },
        //     },
        // });
        // this.sten_stencli = new Addon.Stencil({
        //     title: "元素栏",
        //     groups: this.sten_groups,
        //     search: true,
        //     collapsable: false,
        // });
        // //把stencli放到网页上
        // this.$refs.stencli.appendChild(this.sten_stencli.container);
        // //挂载模板节点，必须在stencli挂载到网页上以后操作
        // this.sten_stencli.load([r1, r1.clone()], "group1");
        // this.sten_stencli.load([r1, r1.clone()], "group2");
    },
    methods: {
        sten_initStencli() {
            //节点
            const r1 = this.graph.createNode({
                width: 100,
                height: 100,
                attrs: {
                    label: {
                        text: "Rect",
                        fill: "#6a6c8a",
                    },
                    body: {
                        stroke: "#31d0c6",
                        strokeWidth: 5,
                    },
                },
            });
            this.sten_stencli = new Addon.Stencil({
                title: "元素栏",
                groups: this.sten_groups,
                search: true,
                collapsable: false,
            });
            //把stencli放到网页上
            console.log(this.sten_stencli.container);
            // this.$refs.stencli.appendChild(this.sten_stencli.container);
            //挂载模板节点，必须在stencli挂载到网页上以后操作
            this.sten_stencli.load([r1, r1.clone()], "group1");
            this.sten_stencli.load([r1, r1.clone()], "group2");
        },
    },
    watch: {
        graph(val) {
            if (val) {
                this.sten_initStencli();
            }
        },
    },
};

export default {
    data() {
        return {
            graph: null,
            testData: {
                // 节点
                nodes: [
                    // {
                    //     id: "node1", // String，可选，节点的唯一标识
                    //     x: 40, // Number，必选，节点位置的 x 值
                    //     y: 40, // Number，必选，节点位置的 y 值
                    //     width: 80, // Number，可选，节点大小的 width 值
                    //     height: 40, // Number，可选，节点大小的 height 值
                    //     label: "hello", // String，节点标签
                    // },
                    // {
                    //     id: "node2", // String，节点的唯一标识
                    //     x: 160, // Number，必选，节点位置的 x 值
                    //     y: 180, // Number，必选，节点位置的 y 值
                    //     width: 80, // Number，可选，节点大小的 width 值
                    //     height: 40, // Number，可选，节点大小的 height 值
                    //     label: "world", // String，节点标签
                    // },
                ],
                // 边
                edges: [
                    // {
                    //     source: "node1", // String，必须，起始节点 id
                    //     target: "node2", // String，必须，目标节点 id
                    // },
                ],
            },
            graphFinish: false,
        };
    },
    mixins: [stencliConfig],
    components: {
        Stencli,
    },
    mounted() {
        this.initGraph();
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
            });
            this.graph.fromJSON(this.testData);
            this.graphFinish = true;
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