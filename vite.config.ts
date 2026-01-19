import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Use base path for GitHub Pages production build, but '/' for local development
  const base = mode === 'production' ? '/python-exercises-learn/' : '/';
  
  return {
    plugins: [react()],
    base,
    server: {
      port: 3000,
      open: false
    }
  };
});
