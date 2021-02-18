<template>
    <div class="home">
        <button class="btn1">submit</button>
        <button class="btn2">submit</button>
        <button class="btn3">submit</button>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style scoped>
.home {
    width: 100%;
    height: 100vh;
    border: 1px solid #999;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

/* 按钮1样式 */
.btn1 {
    border: none;
    background: transparent;
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.3s;
    margin-top: 40px;
    letter-spacing: 3px;
}
.btn1:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
        0 0 100px #03e9f4;
}
 

</style>
