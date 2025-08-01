<script lang="ts" setup>

</script>
<template>
    <div class="app-container">
        <div class="nav">顶部区域</div>
        <div class="main-content">
            <div class="left-side">左侧边栏</div>
            <div class="content">主内容区</div>
        </div>
    </div>

</template>
<style lang="less" scoped>
.app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .nav {
        flex: 0 0 10%;
        background: #f0f0f0;
    }

    .main-content {
        flex: 0 0 90%;
        display: flex;

        .left-side {
            flex: 0 0 10%;
            background: #e6f7ff;
            border-right: 1px solid #d9d9d9;
        }

        .content {
            flex: 0 0 90%;
            background: #fff;
        }
    }
}
</style>
