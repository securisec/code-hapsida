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

// fancy
makeTheme({
	name: 'Tailwind',
	colors: {
		check: '#ff0000',
		background: '#181e29',
		foreground: '#EDF2F7',
		primary: '#A3BFFA',
		secondary: '#E2E8F0',
		tertiary: '#718096',
		warning: '#FBD38D',
		error: '#FEB2B2',
		info: '#A3BFFA',
		success: '#9AE6B4',
		arguments: '#F6AD55',
		variables: '#FFFAF0',
		classname: '#F6AD55',
		number: '#FBD38D',
		controlflow: '#F6AD55',
		selection: '#ed64765d',
		conditional: '#FEB2B2',
		exportbool: '#FBD38D',
		expression: '#63B3ED',
		functions: '#A3BFFA',
		objectkeys: '#81E6D9',
		strings: '#81E6D9',
		types: '#BEE3F8',
		cyan: {a: '#D6BCFA'},
		green: { a: '#C6F6D5' },
		red: { a: '#F687B3' },
		blue: { a: '#F6AD55', b: '#B48EAD' },
		orange: { a: '#93BECE' },
	},
});
