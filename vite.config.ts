import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      resolvers: [
        // 自动导入 Element Plus 相关API
        ElementPlusResolver(),
        // 自动导入element图标组件
        IconsResolver(),
      ],
      // 自动导入第三方库API
      imports: ['vue', 'vue-router', 'pinia'],
      dts: path.resolve(__dirname, 'auto-imports.d.ts'), // 显式指定自动生成的自动导入API声明文件
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动注册element图标组件
        IconsResolver({
          enabledCollections: ['ep'], // 图标集
          prefix: 'Icon', // 图标统一前缀（默认是i，使用方法<前缀-ep-图标名称，如：<icon-ep-user />或<IconEpUser />）
        }),
      ],
      dirs: ['src/components'], // 自动按需导入指定目录下的自定义组件
      dts: path.resolve(__dirname, 'components.d.ts'), // 显式指定自动生成的自动导入组件声明文件
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
