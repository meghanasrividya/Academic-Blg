import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5002', // 👈 forward API requests to backend
      '/uploads': 'http://localhost:5002',

    }
  }
});
