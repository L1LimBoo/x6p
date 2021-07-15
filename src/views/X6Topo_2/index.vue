<template>
    <main class="topo">
        <div class="d1" ref="d1"></div>
    </main>
</template>

<script>
import { resizeListener } from "../../utils/util";

export default {
    name: "topo2",
    mounted() {
        console.log(this.$refs.d1);
        resizeListener(this.$refs.d1, () => {
            console.log("resize");
        });
    },
};
</script>

<style scoped>
main {
    height: 100%;
    width: 100%;
}

.d1 {
    width: 30%;
    height: 30%;
    border: 1px solid red;
}
</style>