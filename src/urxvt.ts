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
	name: 'Urxvt',
	colors: {
		check: '#ff0000',
		background: '#1d1f21',
		foreground: '#c5c8c6',
		primary: '#5e8d87',
		secondary: '#81a2be',
		tertiary: '#707880',
		warning: '#de935f',
		error: '#cc6666',
		info: '#5f819d',
		success: '#8abeb7',
		arguments: '#b5bd68',
		variables: '#c4c19e',
		number: '#ffeac3',
		classname: '#de935f',
		controlflow: '#cc6666',
		selection: '#ed64765d',
		conditional: '#de935f',
		exportbool: '#cc6666',
		expression: '#b5bd68',
		functions: '#8abeb7',
		objectkeys: '#b294bb',
		strings: '#81a2be',
		types: '#b294bb',
		cyan: {a: '#5e8d87'},
		green: { a: '#8aabac' },
		red: { a: '#cc6666' },
		blue: { a: '#81a2be', b: '#ffeac3' },
		orange: { a: '#cc6666' },
	},
});

