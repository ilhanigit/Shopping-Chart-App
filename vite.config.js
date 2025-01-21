import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Ağdaki diğer cihazlardan erişimi açar
    port: 5173        // Port numarasını belirtin
  }
})
