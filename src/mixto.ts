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
	name: 'Mixto',
	colors: {
		check: '#ff0000',
		background: '#111827',
		foreground: '#E5E7EB',
		primary: '#80deea',
		secondary: '#1F2937',
		tertiary: '#374151',
		warning: '#FCD34D',
		error: '#F87171',
		info: '#818CF8',
		success: '#34D399',
		arguments: '#34D399',
		variables: '#c4c19e',
		number: '#C4B5FD',
		classname: '#FCD34D',
		controlflow: '#FCA5A5',
		selection: '#ed64765d',
		conditional: '#FCD34D',
		exportbool: '#F87171',
		expression: '#34D399',
		functions: '#80deea',
		objectkeys: '#C4B5FD',
		strings: '#FEF3C7',
		types: '#34D399',
		cyan: {a: '#34D399'},
		green: { a: '#8aabac' },
		red: { a: '#F87171' },
		blue: { a: '#FCD34D', b: '#F87171' },
		orange: { a: '#F87171' },
	},
});

