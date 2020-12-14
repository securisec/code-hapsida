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
	name: 'Mystic',
	colors: {
		check: '#ff0000',
		background: '#1a1a1a',
		foreground: '#C2C2C2',
		primary: '#6A595A',
		secondary: '#a0a0a0',
		tertiary: '#4c4c4c',
		warning: '#ceb188',
		error: '#6A595A',
		info: '#9ec3c4',
		success: '#9ec49f',
		arguments: '#b5ac97',
		variables: '#C2C2C2',
		number: '#C0D3B7',
		classname: '#b5ac97',
		controlflow: '#B9A7B8',
		selection: '#ed64765d',
		conditional: '#b5ac97',
		exportbool: '#C0D3B7',
		expression: '#97a0b5',
		functions: '#97a897',
		objectkeys: '#97a897',
		strings: '#b5ac97',
		types: '#8aac8b',
		cyan: {a: '#97a0b5'},
		green: { a: '#97a897' },
		red: { a: '#B9A7B8' },
		blue: { a: '#b5ac97', b: '#B9A7B8' },
		orange: { a: '#B9A7B8' },
	},
});

