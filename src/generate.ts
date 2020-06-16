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
  name: 'Gruvbox',
  colors: {
    // background: '#263238', fanct
    background: '#090c09',
    foreground: '#fbf1c7',
    arguments: '#fabd2f',
    variables: '#ebdbb2',
    classname: '#fabd2f',
    controlflow: '#fb4934',
    selection: '#ed64765d',
    conditional: '#E99173',
    exportbool: '#E99173',
    expression: '#95D9CA',
    functions: '#b8bb26',
    objectkeys: '#95D9CA',
    strings: '#99BE83',
    types: '#d893a5',
    green: {a: '#ffe2be'},
    red: {a: '#EA5E56'},
    blue: {a: '#fabd2f', b: '#d893a5'},
    orange: {a: '#d65d0e'}
  }
})