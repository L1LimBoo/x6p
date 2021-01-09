<template>
    <div id="flow" ref="flow"></div>
</template>

<script>
import { Graph, Addon, Shape } from "@antv/x6";

export default {
    name: "flow",
    data() {
        return {
            graph: null,
            testData: {
                // 节点
                nodes: [
                    {
                        id: "node1", // String，可选，节点的唯一标识
                        x: 40, // Number，必选，节点位置的 x 值
                        y: 40, // Number，必选，节点位置的 y 值
                        width: 80, // Number，可选，节点大小的 width 值
                        height: 40, // Number，可选，节点大小的 height 值
                        label: "hello", // String，节点标签
                    },
                    {
                        id: "node2", // String，节点的唯一标识
                        x: 160, // Number，必选，节点位置的 x 值
                        y: 180, // Number，必选，节点位置的 y 值
                        width: 80, // Number，可选，节点大小的 width 值
                        height: 40, // Number，可选，节点大小的 height 值
                        label: "world", // String，节点标签
                    },
                ],
                // 边
                edges: [
                    {
                        source: "node1", // String，必须，起始节点 id
                        target: "node2", // String，必须，目标节点 id
                    },
                ],
            },
        };
    },
    mounted() {
        console.log("initGraph");
        this.initGraph();
    },
    watch: {
        //graph变化了就向外传出graph
        graph: {
            handler: function (val) {
                console.log(val);
            },
            deep: true, //检测内部属性
            immediate: true, //立即触发回调
        },
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
        },
    },
};
</script>

<style lang='less' scoped>
#flow {
    width: 100%;
    height: 100%;
}
</style>