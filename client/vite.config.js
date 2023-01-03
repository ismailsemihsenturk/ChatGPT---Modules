import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

/**********************
 *
 *
 * NOTE: Append /main.html to StackBlitz address bar on right to view app!
 *
 *
 */

export default defineConfig({
    plugins: [

    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        brotliSize: false, // Brotli unsupported in StackBlitz
        rollupOptions: {
            input: {
                app: './imageGenerator.html',
            },
        },
    },
    server: {
        open: '/imageGenerator.html',
    },
})
