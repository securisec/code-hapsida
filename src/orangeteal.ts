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
	name: 'OrangeTeal',
	colors: {
		check: '#ff0000',
		background: '#041214',
		foreground: '#e8dfca',
		primary: '#ca5234',
		secondary: '#b6ab91',
		tertiary: '#3a4b50',
		warning: '#e9b65f',
		error: '#ca5234',
		info: '#2b9ab3',
		success: '#4c9897',
		arguments: '#efd9a6',
		variables: '#e8ddc3',
		number: '#71b8aa',
		classname: '#efd9a6',
		controlflow: '#e76f51',
		selection: '#ed64765d',
		conditional: '#e9b65f',
		exportbool: '#e76f51',
		expression: '#4c9897',
		functions: '#2b9ab3',
		objectkeys: '#2b9ab3',
		strings: '#f4a261',
		types: '#2aaea4',
		cyan: {a: '#4c9897'},
		green: { a: '#ffe2be' },
		red: { a: '#F687B3' },
		blue: { a: '#efd9a6', b: '#e76f51' },
		orange: { a: '#e76f51' },
	},
});


/**
foreground='#b6ab91'
background='#142024'
cursor='#b6ab91'
color0='#041214'
color8='#3a4b50'
color1='#ca5234'
color9='#e76f51'
color2='#2b6855'
color10='#4b796b'
color3='#f4843b'
color11='#f4a261'
color4='#266c72'
color12='#4c9897'
color5='#e9b65f'
color13='#e0c174'
color6='#2aaea4'
color14='#71b8aa'
color7='#b6ab91'
color15='#efd9a6'
 */