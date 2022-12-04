import { execSync } from 'child_process';
import { readdirSync, watch } from 'fs';
import { resolve, join } from 'path';


const callOnceTimers = {};

function callOnce(fn, delay) {
  clearTimeout(callOnceTimers[fn]);
  callOnceTimers[fn] = setTimeout(fn, delay);
}

const cyan = '\x1b[36m';
const reset = '\x1b[0m';

const paths = {
  days: resolve('src', '2022'),
};

class Day {
  constructor(name) {
    this.name = name;
    this.path = resolve(join(paths.days, name));
  }

  watch() {
    watch(this.path, () => callOnce(() => this.run(), 100));
  }

  run() {
    console.log(cyan + this.name + reset);
    try {
      execSync(`node src/run-day.js "${this.path}"`, {stdio: 'inherit'});
    } catch (e) {
      console.error(e);
    }
  }
}

const days = readdirSync(paths.days).map(name => new Day(name));

days.forEach(day => day.watch());

console.log('Watching days for changes');
