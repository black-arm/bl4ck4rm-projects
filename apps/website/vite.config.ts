import tailwindcss from '@tailwindcss/vite';
import { defineConfig, UserConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path';

const config = defineConfig({
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackStart(),
    viteReact(),
    tailwindcss(),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.tsx'],
    globals: true,
  },
  resolve: {
    //dedupe: ['react', 'react-dom', 'react/jsx-runtime'],
    // alias: {
    //   react: resolve('./node_modules/react'),
    //   'react-dom': resolve('./node_modules/react-dom'),
    // },
  }
} as UserConfig)

export default config
