<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'

const searchQuery = ref("");
const handleSearch = () => {
    if (searchQuery.value.trim()) {
        alert(`Searching for: ${searchQuery.value}`);
    }
};
const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
const dropdownItems = [
    {
        label: '系统管理',
        path: '/sysManager'
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
            <div class="search-card">
                <h1 class="title">just so so</h1>
                <p class="subtitle">有什么可以帮你的吗</p>
                <div class="search-container">
                    <el-input v-model="searchQuery" placeholder="搜一搜" class="search-input" @keyup.enter="handleSearch">
                        <template #append>
                            <el-button type="primary" @click="handleSearch" class="search-button">
                                soso
                            </el-button>
                        </template>
                    </el-input>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.app-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

    .main-content {
        height: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;

        .search-card {
            background: white;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            padding: 40px;
            width: 100%;
            max-width: 700px;
            text-align: center;

            .title {
                margin-bottom: 8px;
                color: #333;
                font-size: 32px;
                font-weight: 600;
            }

            .subtitle {
                margin-bottom: 30px;
                color: #666;
                font-size: 16px;
            }

            .search-container {
                margin: 0 auto 30px;
                width: 100%;

                .search-input {
                    width: 100%;

                    &:deep(.el-input__wrapper) {
                        padding: 10px 16px;
                        border-radius: 12px;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    }

                    &:deep(.el-input-group__append) {
                        padding: 0;

                        button {
                            height: 100%;
                            border-radius: 0 12px 12px 0;
                            padding: 0 20px;
                            background-color: #409EFF;
                            border-color: #409EFF;
                            color: white;

                            &:hover {
                                background-color: darken(#409EFF, 10%);
                                border-color: darken(#409EFF, 10%);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>