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
	name: 'PGDark',
	colors: {
		check: '#ff0000',
		background: '#041214',
		foreground: '#EDE8E5',
		primary: '#D84713',
		secondary: '#A8C4D1',
		tertiary: '#3a4b50',
		warning: '#F4E5CB',
		error: '#D84713',
		info: '#A8C4D1',
		success: '#7BC7AE',
		arguments: '#FCC9B4',
		variables: '#FCC9B4',
		number: '#F7E38F',
		classname: '#FCC9B4',
		controlflow: '#A8C4D1',
		selection: '#ed64765d',
		conditional: '#F4E5CB',
		exportbool: '#FF6E00',
		expression: '#7BC7AE',
		functions: '#A8C4D1',
		objectkeys: '#A8C4D1',
		strings: '#D59777',
		types: '#F7E38F',
		cyan: {a: '#7BC7AE'},
		green: { a: '#ffe2be' },
		red: { a: '#F687B3' },
		blue: { a: '#FCC9B4', b: '#e76f51' },
		orange: { a: '#e76f51' },
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