import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // 👈 critical for GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    sourcemap: true, // 👈 Add this temporarily
  },
});
