<script setup lang="ts">
interface RecordItem {
    id: number
    name: string
}
const items: RecordItem[] = [
    { id: 1, name: "苹果" },
    { id: 2, name: "香蕉" },
]

</script>
<template>
    <div class="app-container">
        <div class="search-left">
            <div class="search-container">
                <el-input placeholder="搜一搜" class="search-input">
                    <template #append>
                        <el-button class="search-button">
                            soso
                        </el-button>
                    </template>
                </el-input>
            </div>
            <div class="search-result">
                <ul class="no-bullets">
                    <li v-for="(item) in items" :key="item.id">
                        {{ item.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.search-left {
    width: 40vw;
    padding: 20px 0px 0px 20px;

    .search-result {
        margin-top: 20px;

        .no-bullets {
            list-style: none;
            padding-left: 0;

            li+li {
                margin-top: 20px;
            }
        }
    }

}
</style>