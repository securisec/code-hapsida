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

makeTheme({
	name: 'Buscar',
	colors: {
		check: '#ff0000',
		background: '#0a161a',
		foreground: '#BFC8D1',
		primary: '#3e90ad',
		secondary: '#a0a0a0',
		tertiary: '#4c4c4c',
		warning: '#AF7F54',
		error: '#9e4777',
		info: '#3e90ad',
		success: '#418B77',
		arguments: '#AF7F54',
		variables: '#86ABD0',
		number: '#907072',
		classname: '#AF7F54',
		controlflow: '#ba809b',
		selection: '#ed64765d',
		conditional: '#ba809b',
		exportbool: '#9e4777',
		expression: '#418B77',
		functions: '#80b3ba',
		objectkeys: '#3e90ad',
		strings: '#baaa80',
		types: '#907072',
		cyan: {a: '#418B77'},
		green: { a: '#86ABD0' },
		red: { a: '#9e4777' },
		blue: { a: '#AF7F54', b: '#9e4777' },
		orange: { a: '#9e4777' },
	},
});

