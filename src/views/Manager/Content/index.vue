<script lang="ts" setup>
import type { UploadProps, UploadUserFile } from 'element-plus'

// 表单数据
const formData = ref({
    question: '',
    description: '',
    answer: '',
    descAttachments: [] as UploadUserFile[],
    answerAttachments: [] as UploadUserFile[]
})

// 处理文件上传
const handleDescUpload: UploadProps['onChange'] = (uploadFile, uploadFiles) => {
    if (uploadFiles.length > 4) {
        ElMessage.warning('描述附件最多上传4个文件')
        formData.value.descAttachments = uploadFiles.slice(0, 4)
        return false
    }
    formData.value.descAttachments.push(uploadFile)
}


// 保存表单
const saveForm = () => {
    console.log('保存数据:', formData.value)
    // 这里可以添加提交到API的逻辑
}

// 重置表单
const resetForm = () => {
    formData.value = {
        question: '',
        description: '',
        answer: '',
        descAttachments: [],
        answerAttachments: []
    }
}
</script>

<template>
    <div class="form-container">
        <el-form label-width="80px">
            <!-- 第一行：问题输入框 -->
            <el-form-item label="问题">
                <el-input v-model="formData.question" placeholder="请输入问题" clearable />
            </el-form-item>

            <!-- 第二行：描述+附件上传 -->
            <el-form-item label="描述">
                <div class="desc-container">
                    <el-input v-model="formData.description" type="textarea" :rows="3" placeholder="请输入描述" />
                    <el-upload class="upload-demo" action="#" :on-change="handleDescUpload" :auto-upload="false"
                        :file-list="formData.descAttachments" multiple>
                        <el-button type="primary">上传附件</el-button>
                        <template #tip>
                            <div class="el-upload__tip">支持上传多个描述相关附件</div>
                        </template>
                    </el-upload>
                </div>
            </el-form-item>

            <!-- 第三行：答案+附件上传 -->
            <el-form-item label="答案">
                <div class="answer-container">
                    <el-input v-model="formData.answer" type="textarea" :rows="3" placeholder="请输入答案" />

                </div>
            </el-form-item>

            <!-- 最后一行：保存和重置按钮 -->
            <el-form-item>
                <el-button type="primary" @click="saveForm">保存</el-button>
                <el-button @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style lang="less" scoped>
.form-container {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;

    .desc-container,
    .answer-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }

    .el-textarea {
        width: 100%;
    }

    .upload-demo {
        width: 100%;
    }

    .el-upload__tip {
        margin-top: 5px;
        color: #666;
        font-size: 12px;
    }
}
</style>