import { URL, fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log(env)
  return {
    base: './',
    plugins: [vue(), AutoImport({
      resolvers: [ElementPlusResolver()],
    }), Components({
      resolvers: [ElementPlusResolver()],
    })],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      /* postcss tailwindcss 配置 */
      postcss: {
        plugins: [tailwindcss(), autoprefixer()],
      },
      /* CSS 预处理器 */
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/assets/styles/var.css";',
        },
      },
    },
    build: {
      minify: 'terser', // 启用 terser 压缩
      terserOptions: {
        compress: {
          pure_funcs: ['console.log'], // 只删除 console.log
          drop_debugger: true, // 删除 debugger
        },
      },
    },
    server: {
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          ws: false,
          // 将前缀api替换为空字符串
          rewrite: path =>
            path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), ''),
        },
      },
    },
  }
})
