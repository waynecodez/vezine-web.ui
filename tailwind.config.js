const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		colors: {
			...colors
		},
		extend: {}
	},
	plugins: [],
	fontFamily: {
		sans: ['Inter var', ...defaultTheme.fontFamily.sans]
	},
	aspectRatio: {
		auto: 'auto',
		square: '1 / 1',
		video: '16 / 9',
		1: '1',
		2: '2',
		3: '3',
		4: '4',
		5: '5',
		6: '6',
		7: '7',
		8: '8',
		9: '9',
		10: '10',
		11: '11',
		12: '12',
		13: '13',
		14: '14',
		15: '15',
		16: '16'
	}
};
