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
	name: 'Mountain',
	colors: {
		check: '#ff0000',
		background: '#0c0c0c',
		foreground: '#e7e7e7',
		primary: '#8aabac',
		secondary: '#a0a0a0',
		tertiary: '#4c4c4c',
		warning: '#ceb188',
		error: '#c49ea0',
		info: '#9ec3c4',
		success: '#9ec49f',
		arguments: '#ceb188',
		variables: '#c4c19e',
		number: '#c49ec4',
		classname: '#ceb188',
		controlflow: '#c49ea0',
		selection: '#ed64765d',
		conditional: '#ceb188',
		exportbool: '#c49ea0',
		expression: '#9ec49f',
		functions: '#9ec3c4',
		objectkeys: '#9ec3c4',
		strings: '#a39ec4',
		types: '#8aac8b',
		cyan: {a: '#9ec49f'},
		green: { a: '#8aabac' },
		red: { a: '#c49ea0' },
		blue: { a: '#ceb188', b: '#c49ea0' },
		orange: { a: '#c49ea0' },
	},
});

