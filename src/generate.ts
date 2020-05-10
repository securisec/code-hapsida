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
  name: 'Nightfly',
  colors: {
    // background: '#263238', fanct
    background: '#050025',
    foreground: '#fffffB',
    arguments: '#bdfe67',
    classname: '#bdfe67',
    controlflow: '#ED6477',
    conditional: '#E99173',
    exportbool: '#E99173',
    expression: '#67fea8',
    functions: '#bed1fc',
    objectkeys: '#95D9CA',
    strings: '#F8CC94',
    types: '#AACB6D',
    green: {a: '#57B59C'},
    red: {a: '#EA5E56'},
    blue: {a: '#E1D193'}
  }
})