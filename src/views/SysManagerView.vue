<script lang="ts" setup>
import {
    DataBoard,
    Document,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
<template>
    <div class="app-container">
        <div class="header">
        </div>
        <div class="menu">
            <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
                @close="handleClose">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <Document />
                        </el-icon>
                        <span>系统管理</span>
                    </template>
                    <el-menu-item index="1-1">
                        <template #title>部门管理</template>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <template #title>岗位管理</template>
                    </el-menu-item>
                    <el-menu-item index="1-3">
                        <template #title>角色管理</template>
                    </el-menu-item>
                    <el-menu-item index="1-4">
                        <template #title>人员管理</template>
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item index="2">
                    <el-icon>
                        <DataBoard />
                    </el-icon>
                    <template #title>运营管理</template>
                </el-menu-item>
            </el-menu>
        </div>

    </div>

</template>



<style lang="less" scoped>
.app-container {
    height: 100vh;


    .menu {
        margin-top: 50px;

        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
        }
    }
}
</style>
