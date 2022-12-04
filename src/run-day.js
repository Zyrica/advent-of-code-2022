import { join, resolve } from 'path';
import { readFileSync } from 'fs';
import { pathToFileURL } from 'url';

const red = '\x1b[31m';
const green = '\x1b[32m';
const reset = '\x1b[0m';

const correct = green + 'Correct' + reset;
const wrong = red + 'Wrong' + reset;

const path = process.argv[2];
const paths = {
  index: resolve(join(path, 'index.js')),
  input: resolve(join(path, 'input')),
  solution: resolve(join(path, 'solution')),
};

const {task1, task2} = await import(pathToFileURL(paths.index));

const input = readFileSync(paths.input, 'utf-8').split('\r\n');
const solution = readFileSync(paths.solution, 'utf-8').split('\r\n');

const result = [task1([...input]), task2([...input])];
console.log(result[0], solution[0] === '' + result[0] ? correct : wrong + `(${solution[0]})`);
console.log(result[1], solution[1] === '' + result[1] ? correct : wrong + `(${solution[1]})`);
