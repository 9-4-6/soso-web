import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "@/styles/variables.less";`, // 全局注入
      },
    },
  },
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标
        IconsResolver({
          prefix: 'Icon', // 图标组件前缀 (可选)
          enabledCollections: ['ep'], // Element Plus 图标集
        }),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          alias: { icon: 'ep' }, // 设置别名 (可选)
          enabledCollections: ['ep'], // 启用Element Plus图标集
        }),
      ],
    }),
    // 图标插件
    Icons({
      compiler: 'vue3',
      autoInstall: true, // 自动安装图标集
      scale: 1, // 图标缩放 (可选)
      defaultClass: 'icon', // 默认类名 (可选)
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
