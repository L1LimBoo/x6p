<template>
    <div id="stencliBox">
        <div ref="stencli"></div>
    </div>
</template>

<script>
//载入x6的组件
import { Graph, Addon, Shape } from "@antv/x6";
//载入节点
import { rects, images,switchNodes } from "../../nodes/index";

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
                    graphHeight: 200,
                    graphPadding: 5,
                },
                {
                    name: "group2",
                    title: "图片节点",
                    collapsable: true,
                    collapsed: false,
                    graphWidth: 200,
                    graphHeight: 200,
                    graphPadding: 5,
                },
            ],
        };
    },
    props: ["graph"],
    mounted() {
        this.initStencli();
        // this.dnd = new Addon.Dnd({
        //     target: this.graph,
        // });
    },
    methods: {
        initStencli() {
            //创建 Stencil 的选项继承自创建 Dnd 的选项！！！！
            this.stencli = new Addon.Stencil({
                target: this.graph,
                title: "元素栏",
                groups: this.groups,
                search: true,
                collapsable: false,
            });
            //把stencli放到网页上
            this.$refs.stencli.appendChild(this.stencli.container);
            //挂载模板节点，必须在stencli挂载到网页上以后操作
            this.stencli.load([rects.rectBase,switchNodes.switchNode], "group1");
            this.stencli.load([images.computer1], "group2");
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