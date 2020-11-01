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
	name: 'Nord',
	colors: {
		check: '#ff0000',
		background: '#151617',
		foreground: '#D8DEE9',
		primary: '#5E81AC',
		secondary: '#D8DEE9',
		tertiary: '#4C566A',
		warning: '#EBCB8B',
		error: '#BF616A',
		info: '#88C0D0',
		success: '#8FBCBB',
		arguments: '#D08770',
		variables: '#ECEFF4',
		classname: '#D08770',
		controlflow: '#D08770',
		selection: '#ed64765d',
		conditional: '#EBCB8B',
		exportbool: '#EBCB8B',
		expression: '#8dbf8f',
		functions: '#9ab9d6',
		objectkeys: '#81E6D9',
		strings: '#88C0D0',
		types: '#BEE3F8',
		green: { a: '#ffe2be' },
		red: { a: '#F687B3' },
		blue: { a: '#D08770', b: '#B48EAD' },
		orange: { a: '#93BECE' },
	},
});
