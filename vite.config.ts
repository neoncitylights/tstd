import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'neoncitylights_stdlib',
			fileName: (format) => `neoncitylights_stdlib.${format}.js`
		}
	},
	plugins: [
		dts()
	]
});
