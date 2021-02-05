<template>
    <div ref="detail" class="detail">
        <h1>节点信息</h1>
        <h2>label</h2>
        <a-input v-model="label" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            cell: {},
            label: "",
        };
    },
    props: ["graph"],
    mounted() {
        this.graph.on("node:click", ({ e, x, y, cell, view }) => {
            console.log("cell-detail:", cell);
            this.reset();
            cell.attr("body/stroke", "orange");
            this.label = cell.attrs.label.text;
            this.cell = cell;
        });
        this.graph.on("edge:click", ({ edge }) => {
            this.reset();
            edge.attr("line/stroke", "orange");
            edge.prop("labels/0", {
                attrs: {
                    body: {
                        stroke: "orange",
                    },
                },
            });
        });
        this.graph.on("blank:click", () => {
            this.reset();
        });
    },
    methods: {
        reset() {
            const nodes = this.graph.getNodes();
            nodes.forEach((node) => {
                node.attr("body/stroke", "#000");
            });

            const edges = this.graph.getEdges();
            edges.forEach((edge) => {
                edge.attr("line/stroke", "black");
                edge.prop("labels/0", {
                    attrs: {
                        body: {
                            stroke: "black",
                        },
                    },
                });
            });
        },
    },
    watch: {
        label(val) {
            this.cell.setAttrs({
                label: {
                    text: val,
                },
            });
        },
    },
};
</script>

<style scoped>
.detail {
    width: 100%;
    height: 500px;
    background: cadetblue;
}
</style>