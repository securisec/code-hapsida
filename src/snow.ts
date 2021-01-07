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
	name: 'Snow',
	colors: {
		check: '#ff0000',
		background: '#101112',
		foreground: '#b2bebf',
		primary: '#b2bebf',
		secondary: '#7ab1b3',
		tertiary: '#5e828f',
		warning: '#b98675',
		error: '#b56666',
		info: '#5e828f',
		success: '#779687',
		arguments: '#5e828f',
		variables: '#b2bebf',
		classname: '#b56666',
		number: '#b48291',
		controlflow: '#b56666',
		selection: '#ed64765d',
		conditional: '#b98675',
		exportbool: '#b98675',
		expression: '#779687',
		functions: '#b98675',
		objectkeys: '#5e828f',
		strings: '#7ab1b3',
		types: '#BEE3F8',
		cyan: {a: '#779687'},
		green: { a: '#ffe2be' },
		red: { a: '#b48291' },
		blue: { a: '#b56666', b: '#B48EAD' },
		orange: { a: '#93BECE' },
	},
});
