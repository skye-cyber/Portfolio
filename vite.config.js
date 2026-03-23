import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            // This ensures proper JSX transformation
            jsxRuntime: 'automatic',
            jsxImportSource: 'react',
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: 3000,
    },
    build: {
        // Ensure proper source maps for debugging
        sourcemap: true,
    }
})
