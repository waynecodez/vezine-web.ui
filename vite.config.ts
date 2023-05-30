import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { peerDependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		hmr: true,
		port: 3000,
		open: true
	},
	plugins: [react()],
	build: {
		lib: {
			entry: resolve(__dirname, 'src', 'main.tsx'),
			formats: ['es', 'cjs'],
			fileName: (ext) => `index.${ext}.js`
			// for UMD name: 'GlobalName'
		},
		rollupOptions: {
			external: [...Object.keys(peerDependencies)]
		},
		target: 'esnext',
		sourcemap: true
	}
});
