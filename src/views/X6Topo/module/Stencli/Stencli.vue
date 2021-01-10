<template>
    <div id="stencliBox">
        <div id="dnd">
            <a-card @click="cardClick"> this is node </a-card>
        </div>
        <div ref="stencli"></div>
    </div>
</template>

<script>
import { Graph, Addon, Shape } from "@antv/x6";

export default {
    data() {
        return {
            dnd: null,
            stencli: null, //元素栏组件实例
            groups: [
                //分组信息
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
    props: ["graph"],
    mounted() {
        this.initStencli();
        this.dnd = new Addon.Dnd({
            target: this.graph,
        });
    },
    methods: {
        initStencli() {
            //节点
            //创建 Stencil 的选项继承自创建 Dnd 的选项！！！！
            this.stencli = new Addon.Stencil({
                target: this.graph,
                title: "元素栏",
                groups: this.groups,
                search: true,
                collapsable: false,
            });
            const rect = new Shape.Rect({
                id: "node1",
                x: 40,
                y: 40,
                width: 100,
                height: 40,
                label: "rect",
                zIndex: 2,
            });
            //把stencli放到网页上
            this.$refs.stencli.appendChild(this.stencli.container);
            //挂载模板节点，必须在stencli挂载到网页上以后操作
            this.stencli.load([rect], "group1");
        },
        cardClick(e) {
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
            this.dnd.start(r1, e);
        },
    },
    watch: {
        graph(val) {
            console.log(val);
        },
    },
};
</script>

<style scoped>
#stencliBox {
    height: 800px;
    width: 100%;
    border: 2px solid black;
}
</style>