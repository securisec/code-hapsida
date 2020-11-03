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
	name: 'PGLight',
	colors: {
		check: '#ff0000',
		background: '#f5f2f0',
		foreground: '#041214',
		primary: '#D84713',
		sidebar: '#D84713',
		secondary: '#005473',
		tertiary: '#3a4b50',
		warning: '#B5800D',
		error: '#730024',
		info: '#005473',
		success: '#007561',
		arguments: '#4E4A4B',
		variables: '#4E4A4B',
		number: '#9E7ACC',
		classname: '#4E4A4B',
		controlflow: '#005473',
		selection: '#ed64765d',
		conditional: '#F4E5CB',
		exportbool: '#730024',
		expression: '#007561',
		functions: '#005473',
		objectkeys: '#A8C4D1',
		strings: '#D84713',
		types: '#404A05',
		cyan: {a: '#007561'},
		green: { a: '#007561' },
		red: { a: '#470303' },
		blue: { a: '#0D6326', b: '#005473' },
		orange: { a: '#D84713' },
	},
});


/**
#EDE8E5
#C8C8C8
#B2B2B2
#818181
#4E4A4B
#C5A59A
#AF735A
#D59777
#F0C49E
#F4E5CB
#F7E38F
#B5800D
#730024
#470303
#52213D
#9E7ACC
#9F421F
#BEA0E6
#D84713
#E6D2FF
#FF6E00
#FFAB94
#FCC9B4
#A8C4D1
#005473
#00403B
#005247
#007561
#7BC7AE
#0D6326
#404A05
#615703

#FF6E00
#D84713
#9E7ACC
#470303
#730024
#A8C4D1
#005473
#00403B
#007561
 */