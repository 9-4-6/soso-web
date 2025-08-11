<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue'
import MainContent from '@/views/Manager/Layout/components/MainContent.vue'



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
        <MainContent />
    </div>
</template>

<style lang="less" scoped>
.app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 12px;
    background: #efeaeb;


}
</style>