import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入全局样式
import '@/styles/global.less'
// 创建实例
const app = createApp(App)
// 使用状态管理
app.use(createPinia())
// 使用路由
app.use(router)
//挂载index app节点
app.mount('#app')
