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
	name: 'Punk',
	colors: {
		check: '#ff0000',
		background: '#01012b',
		foreground: '#e2dddf',
		primary: '#AA4570',
		secondary: '#a0a0a0',
		tertiary: '#4c4c4c',
		warning: '#C4A25E',
		error: '#AA4570',
		info: '#97AED1',
		success: '#85ebd9',
		arguments: '#C4A25E',
		variables: '#e2dddf',
		number: '#AA4570',
		classname: '#C4A25E',
		controlflow: '#ff577d',
		selection: '#ed64765d',
		conditional: '#AA4570',
		exportbool: '#AA4570',
		expression: '#ff8090',
		functions: '#85ebd9',
		objectkeys: '#97AED1',
		strings: '#05d9e8',
		types: '#B5A081',
		cyan: {a: '#A394B8'},
		green: { a: '#97AED1' },
		red: { a: '#B3878F' },
		blue: { a: '#C4A25E', b: '#B3878F' },
		orange: { a: '#B5A081' },
	},
});

