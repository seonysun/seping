/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['msw'],
  },
  // build: {
  //   outDir: 'docs',
  //   rollupOptions: {
  //     output: {
  //       manualChunks: (id) => {
  //         if (id.indexOf('node_modules') !== -1) {
  //           const module = id.split('node_modules/').pop().split('/')[0];
  //           return `vendor-${module}`;
  //         }
  //       },
  //     },
  //   },
  // },
});
