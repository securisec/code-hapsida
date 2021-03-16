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
	name: 'Iceberg',
	colors: {
		check: '#ff0000',
		background: '#161821',
		foreground: '#C6C8D0',
		primary: '#93B8C1',
		secondary: '#202232',
		tertiary: '#37394B',
		warning: '#FCD34D',
		error: '#D47D7B',
		info: '#818CF8',
		success: '#34D399',
		arguments: '#B6BD89',
		variables: '#C6C8Df',
		number: '#9E94C3',
		classname: '#89A0C3',
		controlflow: '#D47D7B',
		selection: '#ed64765d',
		conditional: '#FCD34D',
		exportbool: '#D47D7B',
		expression: '#B6BD89',
		functions: '#D9A67F',
		objectkeys: '#9E94C3',
		strings: '#93B8C1',
		types: '#D9A67F',
		cyan: {a: '#93B7C0'},
		green: { a: '#8aabac' },
		red: { a: '#D47D7B' },
		blue: { a: '#89A0C3', b: '#9E94C3' },
		orange: { a: '#D47D7B' },
	},
});

