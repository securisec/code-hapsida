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
  name: 'Fancy',
  colors: {
    background: '#263238',
    arguments: '#c6ff00',
    classname: '#ccff90',
    controlflow: '#ff80ab',
    exportbool: '#ff6150',
    expression: '#ffd180',
    functions: '#b9f6ca',
    objectkeys: '#c0cfff',
    strings: '#ffcb00',
    types: '#82b1ff',
    green: {a: '#54d2d2'},
    red: {a: '#ff6150'}
  }
})