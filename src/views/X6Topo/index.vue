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
                <!-- 小地图 -->
                <!-- <Minimap v-if="graphFinish" :graph="graph"/> -->
                <div ref="minimap"></div>
            </a-col>
        </a-row>
    </main>
</template>

<script>
import Stencli from "./module/Stencli/Stencli";
import Minimap from "./module/Minimap/Minimap";

import { Graph, Addon, Shape } from "@antv/x6";

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
        };
    },
    components: {
        Stencli,
        Minimap,
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
                //小地图配置:scroller.enabled为true才能开启小地图
                scroller: {
                    enabled: true,
                },
                minimap: {
                    enabled: true,
                    container: this.$refs.minimap,
                },
            });
            this.graph.fromJSON(this.testData);
            //事件
            this.graph.on("cell:click", ({ e, x, y, cell, view }) => {
                console.log("cell:", cell);
            });
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