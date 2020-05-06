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
  name: 'Dark',
  colors: {
    // background: '#263238', fanct
    background: '#0c0f1b',
    arguments: '#bdfe67',
    classname: '#bdfe67',
    controlflow: '#ffb3de',
    exportbool: '#e86830',
    expression: '#67fea8',
    functions: '#9deee6',
    objectkeys: '#eebd9d',
    strings: '#fef467',
    types: '#fffeee',
    green: {a: '#a5ee9d'},
    red: {a: '#fe6772'}
  }
})