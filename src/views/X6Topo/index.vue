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
            <a-col :span="6"> </a-col>
            <!-- 画布 -->
            <a-col :span="12">
                <Flow @getGraph="getGraph" />
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
import Flow from "./module/Flow/Flow";

export default {
    data() {
        return {};
    },
    components: {
        Flow,
    },
    methods: {
        getGraph(val) {
            console.log(val);
        },
    },
};
</script>

<style lang='less' scoped>
</style>