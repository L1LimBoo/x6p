<template>
    <div id="minimap" ref="minimap"></div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: ["graph"],
    mounted() {
        // this.graph.scroller.enabled = true;
        // this.graph.minimap = { enabled: true, container: this.$refs.minimap };
    },
    methods: {},
};
</script>

<style>
</style>