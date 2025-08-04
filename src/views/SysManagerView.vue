<script lang="ts" setup>
const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
<template>
    <div class="app-container">
        <div class="nav">
            <div class="left">
                <div class="avatar">
                    <el-avatar :size="40" :src="circleUrl" />
                </div>
                <div class="menuDown">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            admin
                            <el-icon class="el-icon--right">
                                <i-ep-arrow-down />
                            </el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>系统管理</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </div>

        </div>
        <div class="main-content">
            <div class="left-side">
                <el-menu default-active="2" @open="handleOpen" @close="handleClose">
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <i-ep-setting />
                            </el-icon>
                            <span>系统管理</span>
                        </template>
                        <el-menu-item index="1-1">部门管理</el-menu-item>
                        <el-menu-item index="1-2">岗位管理</el-menu-item>
                    </el-sub-menu>
                    <el-sub-menu index="2">
                        <template #title>
                            <el-icon>
                                <i-ep-data-analysis />
                            </el-icon>
                            <span>运营管理</span>
                        </template>
                        <el-menu-item index="2-1">内容管理</el-menu-item>
                    </el-sub-menu>

                </el-menu>
            </div>
            <div class="content"></div>
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

    .nav {
        height: 10%;
        background: #fff;

        .left {
            height: 100%;
            justify-content: flex-end;
            display: flex;
            align-items: center;
            gap: 8px;

            .avatar {
                display: flex;
            }

            .menuDown {
                display: flex;

                .el-dropdown-link {
                    display: flex;
                    /* 使文字和图标垂直对齐 */
                    cursor: pointer;
                    color: var(--el-color-primary);
                    outline: none;
                    box-shadow: none;
                }
            }
        }
    }

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