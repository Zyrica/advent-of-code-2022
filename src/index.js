import { execSync } from 'child_process';
import { readdirSync, watch } from 'fs';
import { resolve, join } from 'path';
import callOnce from './call-once.js';

const cyan = '\x1b[36m';
const reset = '\x1b[0m';

const paths = {
    days: resolve('src', 'days'),
};

class Day {
    constructor(name) {
        this.name = name;
        this.path = resolve(join(paths.days, name));
    }

    watch() {
        console.log('Watching', this.name, 'for changes');
        watch(this.path, () => callOnce(() => this.run(), 100));
    }

    run() {
        console.log(cyan, '\n\n\n', this.name, reset);
        try {
            execSync(`node "${this.path}"`, {stdio: 'inherit'});
        } catch (e) {
            console.error(e);
        }
    }
}

const days = readdirSync(paths.days).map(name => new Day(name));

days.forEach(day => day.run());
console.log('\n\n\n');
days.forEach(day => day.watch());