<script lang="ts" setup>
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
<template>
    <div class="main-content">
        <div class="left-side">
            <el-menu default-active="$route.path" router @open="handleOpen" @close="handleClose">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <i-ep-setting />
                        </el-icon>
                        <span>系统管理</span>
                    </template>
                    <el-menu-item index="/sysManager">部门管理</el-menu-item>
                    <el-menu-item index="/sysManager">岗位管理</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <i-ep-data-analysis />
                        </el-icon>
                        <span>运营管理</span>
                    </template>
                    <el-menu-item index="/sysManager/content">内容管理</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </div>
        <div class="content">
            <router-view></router-view> <!-- 这里会显示子路由组件 -->
        </div>
    </div>

</template>

<style lang="less" scoped>
.main-content {
    height: 85%;
    display: flex;
    gap: 15px;

    .left-side {
        width: 15%;
        background: #fff;
        border-right: 1px solid #d9d9d9;
    }

    .content {
        width: 85%;
        background: #fff;
    }
}
</style>