import { Options } from './types';
import { template } from './template';
import { writeFileSync } from 'fs';
import { resolve } from "path";

const makeTheme = (o: Options) => {
	let json = JSON.stringify(template(o), null, 2);
	writeFileSync(resolve(__dirname, `../themes/Hapsida-${o.name}-theme.json`), json, 'utf8');
};

// fancy
makeTheme({
  name: 'Tailwind',
  colors: {
    // background: '#263238', fanct
    background: '#141a24',
    foreground: '#F7FAFC',
    arguments: '#FBD38D',
    variables: '#FED7D7',
    classname: '#FBD38D',
    controlflow: '#FEB2B2',
    selection: '#ed64765d',
    conditional: '#F6E05E',
    exportbool: '#F6E05E',
    expression: '#9AE6B4',
    functions: '#A3BFFA',
    objectkeys: '#81E6D9',
    strings: '#81E6D9',
    types: '#BEE3F8',
    green: {a: '#ffe2be'},
    red: {a: '#F687B3'},
    blue: {a: '#D6BCFA', b: '#E9D8FD'},
    orange: {a: '#d65d0e'}
  }
})