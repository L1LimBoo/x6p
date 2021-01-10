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
        this.graph.on("cell:click", ({ e, x, y, cell, view }) => {
            console.log("cell-detail:", cell);
            // cell.attr("body/stroke", "orange");
            this.label = cell.attrs.label.text
            this.cell = cell;
        });
    },
    watch:{
        label(val){
            this.cell.setAttrs({
                label:{text:val}
            })
        }
    }
};
</script>

<style scoped>
.detail {
    width: 100%;
    height: 500px;
    background: cadetblue;
}
</style>