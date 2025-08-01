<script setup lang="ts">
import { ref } from "vue";

const searchQuery = ref("");

const handleSearch = () => {
    if (searchQuery.value.trim()) {
        alert(`Searching for: ${searchQuery.value}`);
    }
};
</script>

<template>
    <div class="app-container">
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
</template>

<style lang="less" scoped>
// 变量定义
@background-gradient-start: #f5f7fa;
@background-gradient-end: #c3cfe2;
@card-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
@input-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
@title-color: #333;
@subtitle-color: #666;

// 混合(Mixins)
.flex-center() {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-style() {
    background: white;
    border-radius: 16px;
    box-shadow: @card-shadow;
}

// 样式规则
.app-container {
    .flex-center();
    min-height: 100vh;
    background: linear-gradient(135deg, @background-gradient-start 0%, @background-gradient-end 100%);
    padding: 20px;
}

.search-card {
    .card-style();
    padding: 40px;
    width: 100%;
    max-width: 700px;
    text-align: center;

    .title {
        margin-bottom: 8px;
        color: @title-color;
        font-size: 32px;
        font-weight: 600;
    }

    .subtitle {
        margin-bottom: 30px;
        color: @subtitle-color;
        font-size: 16px;
    }
}

.search-container {
    margin: 0 auto 30px;
    width: 100%;
}

.search-input {
    width: 100%;

    &:deep(.el-input__wrapper) {
        padding: 10px 16px;
        border-radius: 12px;
        box-shadow: @input-shadow;
    }

    &:deep(.el-input-group__append) {
        padding: 0;

        button {
            height: 100%;
            border-radius: 0 12px 12px 0;
            padding: 0 20px;
            background-color: @primary-color;
            border-color: @primary-color;
            color: white;

            &:hover {
                background-color: darken(@primary-color, 10%);
                border-color: darken(@primary-color, 10%);

            }
        }
    }
}
</style>