<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
    username: '',
    password: ''
})

const handleLogin = () => {
    console.log('登录信息:', form)
    // 这里添加登录逻辑
}
</script>
<template>
    <div class="login-container">
        <div class="background">
            <div class="soso-text">SOSO</div>
        </div>
        <el-form label-width="120px" class="login-form" :model="form" status-icon>
            <h2 class="login-title">系统登录</h2>
            <el-form-item label="账号">
                <el-input v-model="form.username" placeholder="请输入账号" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="login-btn" @click="handleLogin">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style lang="less" scoped>
.login-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
        z-index: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.8;

        .soso-text {
            font-size: 30vw;
            font-weight: bold;
            color: rgba(255, 255, 255, 0.1);
            user-select: none;
            pointer-events: none;
            position: absolute;
            transform: rotate(-15deg);
        }
    }

    .login-form {
        width: 480px;
        padding: 40px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 8px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        z-index: 1;
        position: relative;

        .login-title {
            margin-bottom: 30px;
            text-align: center;
            color: #409eff;
        }

        .login-btn {
            width: 100%;
            margin-top: 10px;
        }
    }
}
</style>