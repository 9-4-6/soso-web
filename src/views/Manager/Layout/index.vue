<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue'

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
const dropdownItems = [
    {
        label: '首页',
        path: '/home'
    },
    {
        label: '退出登录',
        action: () => {
            // Add your logout logic here
            console.log('Logging out...')
        }
    }
]
</script>

<template>
    <div class="app-container">
        <NavBar :circle-url="circleUrl" :dropdown-items="dropdownItems" />

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
    </div>
</template>

<style lang="less" scoped>
.app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 12px;
    background: #efeaeb;

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
}
</style>