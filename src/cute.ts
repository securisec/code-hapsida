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
	name: 'Cute',
	colors: {
		check: '#ff0000',
		background: '#0B0C0C',
		foreground: '#d4cac7',
		primary: '#B6AFAA',
		secondary: '#6e717b',
		tertiary: '#d4cac7',
		warning: '#BF9284',
		error: '#B9857F',
		info: '#B6AFAA',
		success: '#7A857A',
		arguments: '#70788c',
		variables: '#d4cac7',
		number: '#708c84',
		classname: '#BF9284',
		controlflow: '#77708c',
		selection: '#ed64765d',
		conditional: '#BF9284',
		exportbool: '#77708c',
		expression: '#708c84',
		functions: '#A29891',
		objectkeys: '#70788c',
		strings: '#B9857F',
		types: '#708c84',
		cyan: {a: '#708c84'},
		green: { a: '#BF9284' },
		red: { a: '#F687B3' },
		blue: { a: '#BF9284', b: '#77708c' },
		orange: { a: '#77708c' },
	},
});
