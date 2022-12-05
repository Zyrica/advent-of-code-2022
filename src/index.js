import { execSync } from 'child_process';
import { watch } from 'fs';
import { resolve } from 'path';
import chalk from 'chalk';

const paths = {
  days: resolve('src/2022'),
  index: resolve('src/2022/Day 1/index.js'),
};

watch(paths.days, (_, name) => {
  const path = resolve(paths.days, name);
  console.clear();
  console.log(chalk.cyan(name));
  try {
    execSync(`node src/run-day.js "${path}"`, {stdio: 'inherit'});
  } catch (e) {
    console.error(e);
  }
});

console.log('Watching days for changes');