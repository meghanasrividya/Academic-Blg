import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://academic-blg-2.onrender.com', // 👈 forward API requests to backend
      '/uploads': 'https://academic-blg-2.onrender.com',
    }
  }
});
