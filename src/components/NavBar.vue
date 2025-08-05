<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

interface DropdownItem {
    label: string
    path?: string
    action?: () => void
}

const props = defineProps({
    circleUrl: {
        type: String,
        default: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    },
    dropdownItems: {
        type: Array as () => DropdownItem[],
        default: () => []
    }
})

const handleItemClick = (item: DropdownItem) => {
    if (item.path) {
        router.push(item.path)
    } else if (item.action) {
        item.action()
    }
}
</script>

<template>
    <div class="nav">
        <div class="left">
            <span class="logo">soso</span>
        </div>
        <div class="right">
            <div class="avatar">
                <el-avatar :size="40" :src="props.circleUrl" />
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
                            <el-dropdown-item v-for="(item, index) in props.dropdownItems" :key="index"
                                @click="handleItemClick(item)">
                                {{ item.label }}
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.nav {
    height: 10%;
    background: #fff;
    height: 60px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    border-bottom: 1px solid #f0f0f0;

    .left {
        justify-content: flex-start;
        display: flex;

        .logo {
            font-size: 24px;
            font-weight: 700;
            background: linear-gradient(135deg, #409EFF 0%, #67C23A 100%);
            background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: 1px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
    }

    .right {
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
                cursor: pointer;
                color: var(--el-color-primary);
                outline: none;
                box-shadow: none;
            }
        }
    }
}
</style>