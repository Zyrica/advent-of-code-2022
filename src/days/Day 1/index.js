import { loadInput } from '../../load-input.js';
import Elf from './elf.js';

// Parse data
function loadElves(input) {
    const elves = [];
    let elf = new Elf();
    input.forEach(calories => {
        if (!calories) {
            elves.push(elf);
            elf = new Elf();
        } else {
            elf.addCalories(Number(calories));
        }
    });
    return elves;
}

const input = loadInput(import.meta);
const elves = loadElves(input);
elves.sort((a, b) => b.sum - a.sum);

// Task 1
const answers = [elves[0].sum];

// Task 2
const top3 = elves.slice(0, 3);
const sumTop3 = top3.reduce((acc, elf) => acc + elf.sum, 0);
answers.push(sumTop3);

console.log({
    input,
    elves,
    answers,
});
