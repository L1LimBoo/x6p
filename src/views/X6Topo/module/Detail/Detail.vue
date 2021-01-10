<template>
    <div ref="detail" class="detail">
        <h1>节点信息</h1>
        <h2>model</h2>
        <div>{{cell.attrs.label}}</div>
        <h2>data</h2>
        <div>{{ JSON.stringify(cell.data) }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cell: {},
        };
    },
    props: ["graph"],
    mounted() {
        this.graph.on("cell:click", ({ e, x, y, cell, view }) => {
            console.log("cell-detail:", cell);
            this.cell = cell;
        });
    },
    methods: {},
};
</script>

<style scoped>
.detail {
    width: 100%;
    height: 500px;
    background: cadetblue;
}
</style>