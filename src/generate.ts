import { Options } from './types';
import { template } from './template';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const makeTheme = (o: Options) => {
	let json = JSON.stringify(template(o), null, 2);
	writeFileSync(
		resolve(__dirname, `../themes/Hapsida-${o.name}-theme.json`),
		json,
		'utf8'
	);
};

let options: Options = {
	name: 'PGLight',
	colors: {
		background: '#ffffff',
		foreground: '#000000',
		primary: '#FF6E00',
		secondary: '#D84713',
		accent: '#9E7ACC',
		red: '#470303',
		green: '#007561',
		blue: '#005473',
		yellow: '#F7E38F',
		cyan: '#A8C4D1',
		purple: '#9E7ACC',
		light: {
			red: '#470303',
			green: '#007561',
			blue: '#005473',
			yellow: '#D84713',
			cyan: '#A8C4D1',
			purple: '#9E7ACC',
		},
		dark: {
			red: '#730024',
			green: '#007561',
			blue: '#005473',
			yellow: '#D84713',
			cyan: '#A8C4D1',
			purple: '#9E7ACC',
		},
		other: {
			orange: '#FF6E00',
		},
		check: '#ff0000',
	},
};
makeTheme(options);
