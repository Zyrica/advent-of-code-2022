import { readFileSync, watch } from 'fs';
import { resolve } from 'path';
import chalk from 'chalk';
import { pathToFileURL } from 'url';

// Init
const delay = 200;
const timers = {};

watch(resolve('src/2022'), async (_, name) => {
  clearTimeout(timers[name]);
  timers[name] = setTimeout(() => runDay(name), delay);
});

console.clear();
console.log('Watching all days for changes.');

// Functions
async function runDay(name) {
  try {
    console.clear();
    console.log(chalk.cyan(name));

    const path = resolve('src/2022/', name) + '/';
    const {task1, task2} = await import(pathToFileURL(path + 'index.js'));
    const tasks = [task1, task2];
    const input = read(path + 'input');
    const solution = read(path + 'solution');

    tasks.forEach((task, i) => {
      const result = task([...input]);
      if (solution[i] === '' + result) {
        console.log(result, chalk.green('Correct'));
      } else {
        console.log(result, chalk.red('Wrong'), solution[i]);
      }
    });
  } catch (e) {
    console.error(e);
  }
}

function read(path) {
  return readFileSync(path, 'utf-8').split('\r\n');
}
