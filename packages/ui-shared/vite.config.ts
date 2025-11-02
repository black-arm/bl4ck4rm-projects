import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      name: '@bl4ck4rm-projects/ui-shared',
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['es'],
    }
  }
})
