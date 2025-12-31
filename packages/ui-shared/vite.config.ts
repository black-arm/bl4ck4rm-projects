import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dts({
    entryRoot: 'src',
    tsconfigPath: './tsconfig.app.json',
    insertTypesEntry: true,
    exclude: [
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.spec.ts',
      '**/*.spec.tsx'
    ]
  }),],
  build: {
    lib: {
      name: '@bl4ck4rm-projects/ui-shared',
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        //'react/jsx-runtime',
        '@radix-ui/react-navigation-menu',
        '@radix-ui/react-slot',
        'lucide-react' 
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    // sourcemap: true,
    // minify: false
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
})
