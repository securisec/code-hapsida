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
	name: 'Pastel',
	colors: {
		check: '#ff0000',
		background: '#16181e',
		foreground: '#e8e8e8',
		primary: '#85b8ed',
		secondary: '#6e717b',
		tertiary: '#e8e8e8',
		warning: '#eda685',
		error: '#ed858a',
		info: '#85b8ed',
		success: '#85edb3',
		arguments: '#eda685',
		variables: '#e8ddc3',
		number: '#85edb3',
		classname: '#eda685',
		controlflow: '#ed858a',
		selection: '#ed64765d',
		conditional: '#eda685',
		exportbool: '#ed858a',
		expression: '#85edb3',
		functions: '#85b8ed',
		objectkeys: '#85b8ed',
		strings: '#85e8ed',
		types: '#85edb3',
		cyan: {a: '#85edb3'},
		green: { a: '#eda685' },
		red: { a: '#F687B3' },
		blue: { a: '#eda685', b: '#ed858a' },
		orange: { a: '#ed858a' },
	},
});


/**
background  #1c1f27
foreground  #e8e8e8
cursor      #e8e8e8
color0      #1c1f27
color8      #6e717b
color9      #ed858a
color10     #85edb3
color11     #eda685
color12     #85b8ed
color13     #ca85ed
color14     #85e8ed
color15     #e8e8e8
 */