import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

//https://www.npmjs.com/package/vite-tsconfig-paths
import tsconfigPaths from 'vite-tsconfig-paths'

//https://vitejs.dev/config/
export default defineConfig({
  	plugins: [
	  	tsconfigPaths(),
		vue(),
		vuetify({ autoImport: true }),
	]
})
