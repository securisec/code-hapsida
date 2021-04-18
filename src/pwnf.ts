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
	name: 'PwnF',
	colors: {
		check: '#ff0000',
		background: '#181A25',
		foreground: '#EEEEEE',
		primary: '#73F7F9',
		secondary: '#3B3C53',
		tertiary: '#7C7E97',
		warning: '#DA9C38',
		error: '#ED5577',
		info: '#818CF8',
		success: '#88EA92',
		arguments: '#dddddd',
		variables: '#ddd',
		number: '#FAEB6D',
		classname: '#DA9C38',
		controlflow: '#ED5577',
		selection: '#ed64765d',
		conditional: '#DA9C38',
		exportbool: '#ED5577',
		expression: '#ED5577',
		objectkeys: '#DA9C38',
		strings: '#73F7F9',
		functions: '#88EA92',
		types: '#88EA92',
		cyan: {a: '#80deea'},
		green: { a: '#88EA92' },
		red: { a: '#ED5577' },
		blue: { a: '#DA9C38', b: '#FAEB6D' },
		orange: { a: '#ED5577' },
	},
});

